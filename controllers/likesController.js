var Like = require('../models/likeModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = async (req, res, next) => {
  const data = await Like.find();
  res.status(200).json(data);
};

exports.getOne = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const doc = await Like.findById(req.params.id);
  if (!doc) {
    return next(new AppError('No Like found with that ID', 404));
  }

  res.status(200).json(doc);
});

exports.updateLike = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const doc = await Like.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No Like found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.createLike = catchAsync(async (req, res, next) => {
  const doc = await Like.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.deleteLike = catchAsync(async (req, res, next) => {
  const doc = await Like.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No Like found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
