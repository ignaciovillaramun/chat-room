var Post = require('../models/postModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = async (req, res, next) => {
  const posts = await Post.find();
  const user = req.user;
  res.render('allPosts', { posts, user });

  // res.status(200).json(data);
};

exports.getOne = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const doc = await Post.findById(req.params.id);
  if (!doc) {
    return next(new AppError('No post found with that ID', 404));
  }

  res.status(200).json(doc);
});

exports.updatePost = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const doc = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No post found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const doc = await Post.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const doc = await Post.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No post found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
});
