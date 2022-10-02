var User = require('./userSchema')



var getAllUsers = ()=> {
    return new Promise((resolve, reject)=>{
        User.find({},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                resolve(data)
            }
        })

    })
}

var getUserById = (userId)=> {
    return new Promise((resolve, reject)=>{
        User.findById(userId,(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



var addUser = (newUser)=> {
    return new Promise((resolve,reject)=> {

        var user = new User({
            name: newUser.name,
            age: newUser.age,
            city: newUser.city
        })
        console.log(user);
        user.save((err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(user)
            }
        })
    })
}


var updateUser = (userId, updatedData) => {
    return new Promise((resolve, reject)=>{
        User.findByIdAndUpdate(userId,{
            name: updatedData.name,
            age: updatedData.age,
            city: updatedData.city
        },(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve("User was updated!")
            }
        })

    })
}

var deleteUser = (userId)=> {
    return new Promise((resolve,reject)=>{
        User.findByIdAndDelete(userId,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("User deleted!!!")
            }
        })
    })
}

module.exports = {getAllUsers,getUserById,addUser,updateUser,deleteUser}