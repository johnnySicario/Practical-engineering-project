const bcrypt = require('bcrypt-nodejs');
const mongoose = require("mongoose"); // this is schema page, we will use this at the time of db insert/fetch/delete etc
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String, // googleId or facebookId
  username: String,
  picture: String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
});

// mongoose.model("users", userSchema); // setting Schema

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if(err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch)  {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}

// Create Model
const ModelClass  = mongoose.model('users', userSchema);

// Export Model
module.exports = ModelClass;