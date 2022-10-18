import axios from 'axios';

const singupUser = (obj) => {
    return axios.post("http://localhost:8000/authentication/register", obj)
}

const loginUser = (obj) => {
    console.log("loginUser")
    return axios.post("http://localhost:8000/authentication/login", obj)
}

const logOutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

const exportedObject = {
    singupUser,
    loginUser,
    logOutUser
};

export default exportedObject