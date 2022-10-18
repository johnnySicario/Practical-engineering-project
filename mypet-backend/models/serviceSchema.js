const mongoose = require('mongoose')

let appSchema = mongoose.Schema

let serviceSchema = new appSchema({
    name: String,
    city: String,
    contact: String
}, { versionKey: false })

module.exports = mongoose.model('service', serviceSchema)