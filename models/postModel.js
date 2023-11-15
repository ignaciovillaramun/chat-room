const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, 'Post must have a message'],
    },
    image: String,
    googleUser: {
      type: mongoose.Types.ObjectId,
      ref: 'GoogleUser',
      required: [true, 'Post must belong to a user'],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
