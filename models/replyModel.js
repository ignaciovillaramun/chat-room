const mongoose = require('mongoose');

const replySchema = new mongoose.Schema(
  {
    message: String,
    googleUser: {
      type: mongoose.Types.ObjectId,
      ref: 'GoogleUser',
      required: [true, 'Reply must belong to a user'],
    },
    postId: {
      type: mongoose.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Reply must belong to a post'],
    },
  },
  { timestamps: true }
);

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
