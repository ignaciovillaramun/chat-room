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
    experience: {
      type: mongoose.Schema.ObjectId,
      ref: 'Experience',
      required: [true, 'Experience must belong to a user'],
    },
    education: {
      type: mongoose.Schema.ObjectId,
      ref: 'Education',
      required: [true, 'Education must belong to a user'],
    },
  },
  {
    versionKey: false,
  }
);

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'experience',
    select: 'position company location start_date end_date responsibilities',
  }).populate({
    path: 'education',
    select: 'degree school location graduation_date',
  });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
