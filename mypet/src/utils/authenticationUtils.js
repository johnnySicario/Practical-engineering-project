import axios from 'axios';

const singupUser = (obj) => {
    return axios.post("http://localhost:8000/authentication/register", obj)
}

const loginUser = (obj) =>{
    return axios.post("http://localhost:8000/authentication/login",obj)
}   

const exportedObject = {
    singupUser,
    loginUser,
    // logOutUser
};

export default exportedObject