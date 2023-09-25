var Education = require('../models/educationsModels');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = async (req, res, next) => {
  const data = await Education.find();

  res.status(200).json(data);
};
