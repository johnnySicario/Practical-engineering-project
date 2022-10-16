const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const usersController = require("./controllers/usersController");
const contactController = require("./controllers/contactController");
const authenticationController = require("./controllers/authentication");
// const upload = require("./models/imageBL");
let cookieSession = require("cookie-session");
const passport = require("passport");
const port = process.env.PORT || 8000;

require("./models/userSchema"); // Note model must be imported before passport
require("./services/passport");


//Main starting of the application
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())

// connect with mongo db
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connnected to mongo DB");
  }
);

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
// app.use('/upload',upload)



// const path = require('path');
// const fs = require("fs");
// const multer = require("multer");
// var imageSchema = require('./models/imageSchema');

// app.use(express.json({limit: "10mb", extended: true}))
// app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// var upload = multer({ storage: storage })

// app.post("/uploadphoto", upload.single('myImage'), (req, res) => {
//   var img = fs.readFileSync(req.file.path);
//   var encode_img = img.toString('base64');
//   var final_img = {
//     contentType: req.file.mimetype,
//     image: new Buffer(encode_img, 'base64')
//   };
//   imageSchema.create(final_img, function (err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result.img.Buffer);
//       console.log("Saved To database");
//       res.contentType(final_img.contentType);
//       res.send(final_img.image);
//     }
//   })
// })



app.listen(port, () => {
  console.log(`Node server started in port ${port}`);
});
