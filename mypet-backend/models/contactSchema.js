const mongoose = require('mongoose')

let appSchema = mongoose.Schema

let contactSchema = new appSchema({
    name: String,
    mail: String,
    message: String
}, { versionKey: false })

module.exports = mongoose.model('contact', contactSchema)