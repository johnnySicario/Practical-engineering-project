const mongoose = require('mongoose')

let appSchema = mongoose.Schema

let publicationSchema = new appSchema({
    name: String,
    header: String,
    text: String,
    picture: String,
}, { versionKey: false })

module.exports = mongoose.model('publication', publicationSchema)