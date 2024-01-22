const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  createdAt: String,
  score: Number,
  user: {
    avatar: String,
    username: {
      type: String,
      required: true,
    },
  },
  replies: [
    {
      _id: String,
      content: String,
      createdAt: String,
      score: Number,
      replyingTo: String,
      user: {
        avatar: String,
        username: {
          type: String,
          required: true,
        },
      },
    },
  ],
});

module.exports = mongoose.model('Comment', commentSchema);
