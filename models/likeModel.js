const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  emoji: String,
  googleUser: {
    type: mongoose.Types.ObjectId,
    ref: 'GoogleUser',
    required: [true, 'Like must belong to a user'],
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: 'Post',
    required: [true, 'Like must belong to a post'],
  },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
