const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const GoogleUser = require('../models/googleUser');

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        // options for google strategy
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/redirect',
      },
      async (accessToken, refreshToken, profile, done) => {
        // passport callback function
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        try {
          let user = await GoogleUser.findOne({ googleId: profile.id });

          if (user) {
            done(null, user);
          } else {
            user = await GoogleUser.create(newUser);
            done(null, user);
          }
        } catch (error) {
          console.error(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    GoogleUser.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};
