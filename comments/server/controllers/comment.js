const Comment = require('../model/comment');
const mongoose = require('mongoose');

exports.getComments = (req, res, next) => {
  console.log('GET Request made');
  Comment.find({})
    .exec()
    .then((comments) => {
      res.status(200).json({
        status: 'Success!',
        comments: comments,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.createComment = (req, res, next) => {
  console.log('POST Request made');
  console.log(req.body);

  const comment = new Comment({
    content: req.body.text,
    score: req.body.score,
    replies: req.body.replies,
    createdAt: req.body.createdAt,
    user: {
      avatar: req.body.user.avatar,
      username: req.body.user.username,
    },
  });
  comment
    .save()
    .then((result) => {
      res.status(201).json('Comment added successfully!');
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Failed to create comment!',
        error: err,
      });
    });
};

exports.updateComment = (req, res, next) => {
  console.log('PATCH Request made');
  const id = req.body.id;
  const text = req.body.text;

  Comment.findOneAndUpdate(
    { 'replies._id': id }, // Search for a comment with the specified reply ID
    { $set: { 'replies.$.content': text } }, // $ is the positional operator that identifies the correct element in the array to update
    { new: true }
  )
    .exec()
    .then((result) => {
      if (!result) {
        return Comment.updateOne({ _id: id }, { content: text }); // If no comment was found with the reply ID, it might be the root comment
      } else {
        return result.save();   // Save the updated reply
      }
    })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: 'Comment or reply not found' });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteComment = (req, res, next) => {
  console.log('DELETE request made');
  console.log(req.params);
  const id = req.params.id;

  // ID could be for a comment or a nested reply so we first check for the nested reply
  Comment.findOneAndUpdate(
    { 'replies._id': id }, // Search for a comment with the specified reply ID
    { $pull: { replies: { _id: id } } }, // Remove the matching reply from the replies array
    { new: true }
  )
    .exec()
    .then((result) => {
      if (!result) {
        return Comment.deleteOne({ _id: id }); // If no comment was found with the reply ID, it might be the root comment
      } else {
        return result.save(); // Save the updated comment with the removed reply
      }
    })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: 'Comment or reply not found' });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.createReply = (req, res, next) => {
  console.log('PUT request made');
  console.log(req.params);

  const idToReply = req.params.id;
  const newReply = {
    _id: new mongoose.Types.ObjectId(),
    content: req.body.text,
    score: req.body.score,
    createdAt: req.body.createdAt,
    replyingTo: req.body.replyingTo,
    user: {
      avatar: req.body.user.avatar,
      username: req.body.user.username,
    },
  };

  Comment.findOneAndUpdate(
    { 'replies._id': idToReply },
    { $push: { replies: newReply } },
    { new: true }
  )
    .exec()
    .then((result) => {
      if (!result) {
        return Comment.findOne({ _id: idToReply })
          .exec()
          .then((result) => {
            if (!result) {
              return res.status(404).json({ message: 'Comment not found' });
            }
            result.replies.push(newReply);
            return result.save();
          });
      } else {
        return result.save();
      }
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
