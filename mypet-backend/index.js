const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const usersController = require("./controllers/usersController");
const contactController = require("./controllers/contactController");
const serviceController = require("./controllers/serviceController");
const PetBreedsController = require("./controllers/PetBreedsController");
const publicationController = require("./controllers/publicationController");
const authenticationController = require("./controllers/authentication");
let cookieSession = require("cookie-session");
const passport = require("passport");

const port = process.env.PORT || 8000;

// connect with mongo db
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connnected to mongo DB");
  }
);

require("./models/userSchema"); // Note model must be imported before passport
require("./services/passport");


//Main starting of the application
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit : '1mb' }))
app.use(bodyParser.urlencoded({ extended: true , limit : '1mb' }))



/* ================ Creating Cookie Key and link with Passport JS: Start ================  */
app.use(
  cookieSession({
    maxAge: 30 * 86400 * 1000, // expire in 30 days(milli seconds)
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
/* ================ Creating Cookie Key and link with Passport JS: End ================  */

require("./routes/authRoute")(app);
app.use('/users', usersController)
app.use('/contact', contactController)
app.use('/authentication', authenticationController)
app.use('/service', serviceController)
app.use('/publication', publicationController)
app.use('/PetBreed', PetBreedsController)



app.listen(port, () => {
  console.log(`Node server started in port ${port}`);
});
