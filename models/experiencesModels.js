const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  location: String,
  start_date: String,
  end_date: String,
  responsibilities: [String],
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
