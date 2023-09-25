var Experience = require('../models/experiencesModels');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = async (req, res, next) => {
  const data = await Experience.find();

  res.status(200).json(data);
};
