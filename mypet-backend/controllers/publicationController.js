var express = require('express')
var appRouter = express.Router()
var publicationsBL = require('../models/publicationBL')

appRouter.route('/').get(async(req,resp)=>{
    var publications = await publicationsBL.getAllPublications()
    return resp.json(publications)
})

appRouter.route('/:id').get(async(req,resp)=>{
    var id = req.params.id
    var publication = await publicationsBL.getPublicationById(id)
    return resp.json(publication)
})

appRouter.route('/').post(async(req,resp)=>{
    var publicationObj = req.body;
    var publication = await publicationsBL.addPublication(publicationObj)
    return resp.json(publication)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id
    var result = await publicationsBL.deletePublication(id)
    return resp.json(result)
})

module.exports = appRouter
