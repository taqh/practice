const express = require('express');

const router = express.Router();

let test = {};

exports.getComments = (req, res, next) => {
  res.status(200).json({
    message: 'Comments fetched successfully!',
  });
  // Comment.find()
  // .exec()
  // .then((comments) => {
  //    res.status(200).json(comments);
  // })
  // .catch((err) => {
  //    res.status(500).json({
  //       error: err,
  //    });
  // });
};

exports.createComment = (req, res, next) => {
  // const comment = new Comment({
  //    _id: new mongoose.Types.ObjectId(),
  //    text: req.body.text,
  // });
  res.status(200).json({
    message: 'Comment created successfully!',
    comment: test,
  });
};

exports.updateComment = (req, res, next) => {
  const id = req.params.id;
  const comment = req.body.comment;
  Comment.update({ _id: id }, { $set: comment })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  Comment.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

// module.exports = router;
