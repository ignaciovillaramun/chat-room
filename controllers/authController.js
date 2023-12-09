exports.ensureAuthenticated = (req, res, next) => {
  console.log('auth', process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'production') {
    res.redirect('/login');
  }
  if (req.isAuthenticated()) {
    return next();
  }
  return next();
};
