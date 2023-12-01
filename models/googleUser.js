const mongoose = require('mongoose');

const googleUserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  theme: {
    type: String,
    default: 'light'
  },
  userType: {
    type: String,
    default: 'user'
  },
});

const GoogleUser = mongoose.model('GoogleUser', googleUserSchema);

module.exports = GoogleUser;
