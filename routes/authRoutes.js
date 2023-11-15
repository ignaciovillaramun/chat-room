const express = require('express');
const passport = require('passport');
const router = express.Router();
const googleUserController = require('../controllers/googleUsersController');

// Auth login
router.route('/login').get(googleUserController.login);

// Auth logout
router.route('/logout').get(googleUserController.logout);

// Auth with google+
router.route('/google').get(googleUserController.googleRouteHandler);

// Callback route for google to redirect to
router
  .route('/google/redirect')
  .get(
    googleUserController.googleRedirectHandler,
    googleUserController.handleSuccessfulGoogleRedirect
  );

module.exports = router;
