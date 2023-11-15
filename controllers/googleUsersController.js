var User = require('../models/googleUser');
const passport = require('passport');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.login = async (req, res, next) => {
  res.render('login', { user: req.user });
};

exports.logout = async (req, res, next) => {
  // handle with passport
  req.logout((err) => {
    if (err) {
      // Handle error, e.g., by sending an error response
      res.status(500).send('Error logging out');
    } else {
      // Successful logout, redirect the user
      res.redirect('/');
    }
  });
};

exports.googleRouteHandler = passport.authenticate('google', {
  scope: ['profile'],
});

exports.googleRedirectHandler = passport.authenticate('google', {
  failureRedirect: '/login',
});

exports.handleSuccessfulGoogleRedirect = (req, res) => {
  res.redirect('/profile/');
};

//----------------//

exports.getAll = async (req, res, next) => {
  const data = await User.find();
  res.status(200).json(data);
};

exports.getOne = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);
  if (!doc) {
    return next(new AppError('No doc found with that ID', 404));
  }

  res.status(200).json(doc);
});

exports.updateUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
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
