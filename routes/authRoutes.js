const express = require('express');
const passport = require('passport');
const router = express.Router();

// Auth login
router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

// Auth logout
router.get('/logout', (req, res) => {
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
});

// Auth with google+
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// Callback route for google to redirect to
router.get(
  '/google/redirect',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile/');
  }
);

module.exports = router;
