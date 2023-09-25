const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: String,
  school: String,
  location: String,
  graduation_date: String,
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
