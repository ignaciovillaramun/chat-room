var User = require('../models/usersModels');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const fieldOrder = [
  'id',
  'name',
  'email',
  'phone',
  'address',
  'experience',
  'education',
];

const formatDocument = (doc, fieldOrder) => {
  const formattedDoc = {};

  fieldOrder.forEach((field) => {
    formattedDoc[field] = doc[field];
  });

  return formattedDoc;
};

exports.getAll = async (req, res, next) => {
  const data = await User.find();
  const formattedData = data.map((doc) => formatDocument(doc, fieldOrder));

  res.status(200).json(formattedData);
};

exports.getOne = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);
  const formattedDoc = formatDocument(doc, fieldOrder);

  if (!doc) {
    return next(new AppError('No doc found with that ID', 404));
  }

  res.status(200).json(formattedDoc);
});

exports.createUser = catchAsync(async (req, res, next) => {
  const doc = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  console.log(doc);

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

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
