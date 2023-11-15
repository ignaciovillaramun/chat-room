const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    address: {
      street: {
        type: String,
        required: [true, 'Please provide your street address'],
      },
      city: {
        type: String,
        required: [true, 'Please provide your city'],
      },
      state: {
        type: String,
        required: [true, 'Please provide your state'],
      },
      zipcode: {
        type: String,
        required: [true, 'Please provide your zipcode'],
      },
    },
    experience: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Experience',
        required: [true, 'Experience must belong to a user'],
      },
    ],
    education: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Education',
        required: [true, 'Education must belong to a user'],
      },
    ],
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
