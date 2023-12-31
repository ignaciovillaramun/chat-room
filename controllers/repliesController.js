var Reply = require('../models/replyModel');
var Post = require('../models/postModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = async (req, res, next) => {
  const data = await Reply.find();
  res.status(200).json(data);

  /*
    #swagger.security = [{
    "oauth2":[]
    }]
  */
};

exports.getOne = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const doc = await Reply.findById(req.params.id);
  if (!doc) {
    return next(new AppError('No Reply found with that ID', 404));
  }

  res.status(200).json(doc);

  /*
    #swagger.security = [{
    "oauth2":[]
    }]
  */
});

exports.updateReply = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const doc = await Reply.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No Reply found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
  /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
          $message: "This is an edited test reply.",
        }
    }

    #swagger.security = [{
        "oauth2":[]
    }]

    #swagger.responses[204] = {}
    #swagger.responses[404] = {}
    #swagger.responses[500] = {}
       */
});

exports.createReply = catchAsync(async (req, res, next) => {
  console.log('hello');
  const { postId } = req.body;
  const post = await Post.findById(postId);

  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }

  const doc = await Reply.create(req.body);

  res.status(201).json({
    status: 'success',
    data: doc,
  });
  /* #swagger.parameters['body'] = {
        in: 'body',
        'required': true,
        schema: {
          $googleUser: "",
          $postId: "Id of the post being responded to",
          $message: "This is a test reply.",
        }
    }

    #swagger.security = [{
        "oauth2":[]
    }]

    #swagger.responses[201] = {}
    #swagger.responses[500] = {}
       */
});

exports.deleteReply = catchAsync(async (req, res, next) => {
  const doc = await Reply.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('No Reply found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
  /*
  #swagger.security = [{
        "oauth2":[]
    }]

  #swagger.responses[200] = {}
  #swagger.responses[404] = {}
  #swagger.responses[500] = {}
  */
});
