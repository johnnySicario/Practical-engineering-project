import axios from 'axios'

const url = "http://localhost:8000/authentication/register"

const addItem = (obj) =>{
    return axios.post(url,obj)
}   


const exportedObject = {
    addItem
};

export default exportedObject