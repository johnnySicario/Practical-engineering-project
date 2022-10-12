const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require('../models/userSchema');
const userBL = require('../models/userBL')
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = "secret";

passport.use(
  new JwtStrategy(opts, (user, done) => {
    User.findOne({ _id: user.id }).then(existingUser => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        return done(null, false);
      }
    });
  })
);

// For Google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ idSocial: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          userBL.addUser(profile, "google").then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);

// For facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK_APP_ID,
      clientSecret: keys.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ idSocial: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          userBL.addUser(profile, "facebook").then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
