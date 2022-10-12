var Contact = require('./contactSchema')

var getAllContacts = () => {
    return new Promise((resolve, reject) => {
        Contact.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

var getContactById = (contactId) => {
    return new Promise((resolve, reject) => {
        Contact.findById(contactId, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



var addContact = (newContact) => {
    return new Promise((resolve, reject) => {

        var contact = new Contact({
            name: newContact.name,
            mail: newContact.mail,
            massage: newContact.massage
        })
        contact.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(contact)
            }
        })
    })
}


var deleteContact = (contactId) => {
    return new Promise((resolve, reject) => {
        Contact.findByIdAndDelete(contactId, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("Contact deleted!!!")
            }
        })
    })
}

module.exports = { getAllContacts, getContactById, addContact, deleteContact }