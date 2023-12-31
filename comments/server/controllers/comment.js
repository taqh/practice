const comments = require('../data/comments.json');

exports.getComments = (req, res, next) => {
  console.log('GET Request made');
  res.status(200).json({
    status: 'Success!',
    comments: comments,
  });
  // With MongoDB
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
  console.log('POST Request made');
  res.status(200).json({
    message: 'Comment created successfully!',
    comment: req.body,
  });

  // const comment = new Comment({
  //    _id: new mongoose.Types.ObjectId(),
  //    text: req.body.text,
  // });
  console.log(req.body);
};

exports.updateComment = (req, res, next) => {
  console.log('PUT Request made');
  res.status(200).json({
    message: 'Comment updated successfully!',
    comment: req.body,
  });

  console.log(req.body);
  // const id = req.params.id;
  // const comment = req.body.comment;
  // Comment.update({ _id: id }, { $set: comment })
  //   .exec()
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });
};

exports.deleteComment = (req, res, next) => {
  console.log('DELETE request made')
  res.status(200).json({
    message: 'Comment deleted successfully!',
    commentId: req.body,
  })
  // const id = req.params.id;
  // Comment.remove({ _id: id })
  //   .exec()
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });
};