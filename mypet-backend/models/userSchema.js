const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  idSocial: String,
  username: String,
  picture: String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
}, { versionKey: false });

// userSchema.pre('save', function(next) {
//   const user = this;
//   bcrypt.genSalt(10, function(err, salt) {
//     if(err) {
//       return next(err);
//     }
//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });


// Create Model
const ModelClass  = mongoose.model('users', userSchema);

// Export Model
module.exports = ModelClass;