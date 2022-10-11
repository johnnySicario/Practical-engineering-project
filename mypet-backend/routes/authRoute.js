const passport = require("passport");
const keys = require("../config/keys");
const Authentication = require('../controllers/authentication');

const requireAuth = passport.authenticate('jwt', { session: false });

const requireSignin = passport.authenticate('local', { session: false });



module.exports = app => {


 // user routes
  app.get('/user', requireAuth, (req,res) => {
    res.send({ message: 'super secret code is haha' });
  });
  app.post('/user/signin', requireSignin, Authentication.signin);
  app.post('/user/signup', Authentication.signup);





  // google routes
  app.get("/", (req, res) => {
    res.status(200).json({
      googleClientID: keys.googleClientID,
      googleCLientSecret: keys.googleClientSecret
    });
  });



  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("google callback")
      res.redirect("/"); // login case - redirect to profile page
    }
  );

  // facebook routes
  app.get("/auth/facebook", passport.authenticate("facebook"));

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    function(req, res) {
      console.log("i am in fb callback");
      // Successful authentication, redirect home.
      //res.redirect("/profile");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/"); // log out case
    // res.send(req.user);
  });
};
