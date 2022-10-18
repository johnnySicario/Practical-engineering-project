import axios from 'axios'

const singupUser = (obj) =>{
    return axios.post("http://localhost:8000/authentication/register",obj)
}   

const loginUser = (obj) =>{
    console.log(obj);
    return axios.post("http://localhost:8000/authentication/login",obj)
}   

const exportedObject = {
    singupUser,
    loginUser
};

export default exportedObject