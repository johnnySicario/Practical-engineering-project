var publication = require('./publicationSchema')

var getAllPublications = () => {
    return new Promise((resolve, reject) => {
        publication.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

var getPublicationById = (publicationId) => {
    return new Promise((resolve, reject) => {
        publication.findById(publicationId, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

var addPublication = (newPublication) => {
    return new Promise((resolve, reject) => {

        var addPublication = new publication({
            name: newPublication.name,
            header: newPublication.header,
            text: newPublication.text,
            picture: newPublication.picture
        })
        
        addPublication.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(addPublication)
            }
        })
    })
}


var deletePublication = (publicationId) => {
    return new Promise((resolve, reject) => {
        publication.findByIdAndDelete(publicationId, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("publication deleted!!!")
            }
        })
    })
}

module.exports = { getAllPublications, getPublicationById, addPublication, deletePublication }