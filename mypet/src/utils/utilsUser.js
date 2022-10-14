import axios from 'axios'

const url = "http://localhost:8000/users"

const getAll =  () =>{
    return axios.get(url)
}

const getById = (id)=>{
    return axios.get(`${url}/${id}`)
}
const addItem =(obj)=>{
    return axios.post(url,obj)
}   

const updateItem= (id,obj)=>{
    return axios.put(`${url}/${id}`,obj)
}

const removeItem = (id)=>{
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