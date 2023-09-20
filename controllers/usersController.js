var User = require('../models/usersModels');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = async (req, res, next) => {
  const data = await User.find();
  console.log('hello', data);

  res.status(200).json(data);
};

exports.getOne = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);

  if (!doc) {
    return next(new AppError('No doc found with that ID', 404));
  }

  res.status(200).json(doc);
});

exports.createContact = catchAsync(async (req, res, next) => {
  const doc = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.updateContact = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.deleteContact = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
