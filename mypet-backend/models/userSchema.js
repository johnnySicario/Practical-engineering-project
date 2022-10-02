var mongoose = require('mongoose')

var appSchema = mongoose.Schema

var UserSchema = new appSchema({
    name : String,
    age : Number,
    city : String
})

module.exports = mongoose.model('user', UserSchema)