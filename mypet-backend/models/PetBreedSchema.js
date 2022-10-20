const mongoose = require('mongoose')

let appSchema = mongoose.Schema

let petBreedsSchema = new appSchema({
    title: String,
    text: String,
    picture: String,
    link: String
}, { versionKey: false })

module.exports = mongoose.model('petBreeds', petBreedsSchema)