var express = require('express')
var appRouter = express.Router()
var servicesBL = require('../models/serviceBL')

appRouter.route('/').get(async(req,resp)=>{
    var services = await servicesBL.getAllServices()
    return resp.json(services)
})


appRouter.route('/:id').get(async(req,resp)=>{
    var id = req.params.id
    var service = await servicesBL.getServiceById(id)
    return resp.json(service)
})

appRouter.route('/').post(async(req,resp)=>{
    var serviceObj = req.body;
    var service = await servicesBL.addService(serviceObj)
    return resp.json(service)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id
    var result = await servicesBL.deleteService(id)
    return resp.json(result)
})

module.exports = appRouter
