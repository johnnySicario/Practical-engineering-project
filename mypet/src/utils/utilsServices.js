import axios from 'axios'

const getAll = (url) => {
    return axios.get(url,{
        "token": `${sessionStorage.getItem('token')}`
    })
}

const getById = (url, id) => {
    return axios.get(`${url}/${id}`)
}
const addItem = (url, obj) => {
    return axios.post(url, obj)
}

const updateItem = (url, id, obj) => {
    return axios.put(`${url}/${id}`, obj)
}

const removeItem = (url, id) => {
    return axios.delete(`${url}/${id}`)
}

const exportedObject = {
    getAll,
    getById,
    addItem,
    updateItem,
    removeItem
};

export default exportedObject