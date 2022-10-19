
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
    return new Promise((resolve, reject) => {
        var user;
        if (social == "google") {
            user = new users({
                idSocial: newUser.id,
                email: newUser.emails[0].value,
                username: newUser.displayName,
                password: newUser.password,
                admin: false
            })
        }

        if (social == "facebook") {
            user = new users({
                idSocial: newUser.id,
                username: newUser.displayName,
                password: newUser.password,
                admin: false
            })
        }

        if (social == "regular") {
            user = new users({
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                admin: false
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

var updateUser = (userId, updatedData) => {
    return new Promise((resolve, reject) => {
        users.findByIdAndUpdate(userId, updatedData,
            (err) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("user was updated!")
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

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser }