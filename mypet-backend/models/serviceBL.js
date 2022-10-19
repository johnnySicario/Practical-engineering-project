var service = require('./serviceSchema')

var getAllServices = () => {
    return new Promise((resolve, reject) => {
        service.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                console.log(data)
                resolve(data)
            }
        })
    })
}

var getServiceById = (serviceId) => {
    return new Promise((resolve, reject) => {
        service.findById(serviceId, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



var addService = (newService) => {
    return new Promise((resolve, reject) => {

        const addService = new service({
            name: newService.name,
            city: newService.city,
            contact: newService.contact
        })

        addService.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(newService)
            }
        })
    })
}


var deleteService = (serviceId) => {
    return new Promise((resolve, reject) => {
        service.findByIdAndDelete(serviceId, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("service deleted!!!")
            }
        })
    })
}

module.exports = { getAllServices, getServiceById, addService, deleteService }