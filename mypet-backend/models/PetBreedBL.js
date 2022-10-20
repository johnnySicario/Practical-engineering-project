var PetBreeds = require('./PetBreedSchema')

var getAllPetBreeds = () => {
    return new Promise((resolve, reject) => {
        PetBreeds.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}


var addPetBreeds = (newPetBreeds) => {
    console.log(newPetBreeds)
    return new Promise((resolve, reject) => {

        var PetBreedsToServ = new PetBreeds({
            title: newPetBreeds.title,
            text: newPetBreeds.text,
            picture: newPetBreeds.picture,
            link: newPetBreeds.link
        })
        
        PetBreedsToServ.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(PetBreedsToServ)
            }
        })
    })
}


var deletePetBreeds = (PetBreedId) => {
    return new Promise((resolve, reject) => {
        PetBreeds.findByIdAndDelete(PetBreedId, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("PetBreeds deleted!!!")
            }
        })
    })
}

module.exports = { getAllPetBreeds, addPetBreeds, deletePetBreeds }