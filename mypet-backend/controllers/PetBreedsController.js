var express = require('express')
var appRouter = express.Router()
var PetBreedsBL = require('../models/PetBreedBL')

appRouter.route('/').get(async(req,resp)=>{
    var PetBreeds = await PetBreedsBL.getAllPetBreeds()
    return resp.json(PetBreeds)
})


appRouter.route('/').post(async(req,resp)=>{
    var contactObj = req.body;
    var contact = await PetBreedsBL.addPetBreeds(contactObj)
    return resp.json(contact)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id
    var result = await PetBreedsBL.deletePetBreeds(id)
    return resp.json(result)
})

module.exports = appRouter
