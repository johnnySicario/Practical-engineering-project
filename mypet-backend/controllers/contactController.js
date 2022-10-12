var express = require('express')
var appRouter = express.Router()
var contactsBL = require('../models/contactBL')

appRouter.route('/').get(async(req,resp)=>{
    var contacts = await contactsBL.getAllContacts()
    return resp.json(contacts)
})


appRouter.route('/:id').get(async(req,resp)=>{
    var id = req.params.id
    var contact = await contactsBL.getContactById(id)
    return resp.json(contact)
})

appRouter.route('/').post(async(req,resp)=>{
    var contactObj = req.body;
    var contact = await contactsBL.addContact(contactObj)
    return resp.json(contact)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id
    var result = await contactsBL.deleteContact(id)
    return resp.json(result)
})

module.exports = appRouter
