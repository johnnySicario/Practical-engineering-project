var express = require('express')
var appRouter = express.Router()
var usersBL = require('../models/userBL')



appRouter.route('/').get(async(req,resp)=>{
    var users = await usersBL.getAllUsers()
    return resp.json(users)
})


appRouter.route('/:id').get(async(req,resp)=>{
    var id = req.params.id
    var user = await usersBL.getUserById(id)
    return resp.json(user)
})

appRouter.route('/').post(async(req,resp)=>{
    var userObj = req.body;
    var user = await usersBL.addUser(userObj)
    return resp.json(user)

})

appRouter.route('/:id').put(async(req, resp)=>{
    var id = req.params.id
    var userObj = req.body
    var result = await usersBL.updateUser(id,userObj)
    return resp.json(result)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id
    var result = await usersBL.deleteUser(id)
    return resp.json(result)
})



module.exports = appRouter