
var users = require('./userSchema')

var getAllUsers = () => {
    return new Promise((resolve, reject) => {
        users.find({}, (err, data) => {
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
        users.findById(userId, (err, data) => {
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
            user = new users({
                idSocial: newUser.id,
                email: newUser.emails[0].value,
                username: newUser.displayName,
                password: newUser.password
            })
        }

        if (social == "facebook") {
            user = new users({
                idSocial: newUser.id,
                username: newUser.displayName,
                password: newUser.password
            })
        }

        if (social == "regular") {
            user = new users({
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
        users.findByIdAndDelete(userId, (err) => {
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