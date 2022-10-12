var Contact = require('./contactSchema')
var User = require('./userSchema')

var getAllUsers = () => {
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

var getUserById = (userId) => {
    return new Promise((resolve, reject) => {
        Contact.findById(userId, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

var addUser = (newUser, social) => {
    console.log(newUser)
    return new Promise((resolve, reject) => {
        var user;
        if (social == "google") {
            user = new User({
                idSocial: newUser.id,
                email: newUser.emails[0].value,
                username: newUser.displayName,
                password: newUser.password
            })
        }

        if (social == "facebook") {
            user = new User({
                idSocial: newUser.id,
                username: newUser.displayName,
                password: newUser.password
            })
        }

        if (social == "regular") {
            user = new User({
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            })
        }

        user.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(user)
            }
        })
    })
}


var deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(userId, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("User deleted!!!")
            }
        })
    })
}

module.exports = { getAllUsers, getUserById, addUser, deleteUser }