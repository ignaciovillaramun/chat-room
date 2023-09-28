const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
    res.send('nope');
  } else {
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  const user = req.user;

  if (user) {
    const firstName = user.firstName.split(' ')[0];
    const capitalizedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1);
    res.render('profile', {
      user,
      capitalizedFirstName,
    });
  }
});

module.exports = router;
