const mongoose = require('mongoose')

let appSchema = mongoose.Schema

let contactSchema = new appSchema({
    name: String,
    mail: String,
    massage: String
}, { versionKey: false })

module.exports = mongoose.model('contact', contactSchema)