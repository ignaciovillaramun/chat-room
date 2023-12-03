const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const GoogleUser = require('../models/googleUser');

module.exports = function (passport) {
  const callbackURL =
    process.env.NODE_ENV === 'production'
      ? 'https://chat-room-f53d.onrender.com/auth/google/redirect'
      : 'http://localhost:8080/auth/google/redirect';
  console.log(callbackURL);

  passport.use(
    new GoogleStrategy(
      {
        // options for google strategy
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL,
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
