import Utils from '../../utils/utilsUser'
import axios from 'axios'

const initialState = {
    users: [],
    usersLoading: false
}

const getData = async (user) => {
    let resp = await axios.post("http://localhost:8000/authentication/login",user)
    console.log(resp);
    console.log(resp.data);
}


const usersReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            state = { ...state, users: action.payload }
            return state
        case 'GET_USER':
            console.log('GET_USER')
            getData(action.payload)
            state = { ...state, users: action.payload }
            return state
        case 'SET_USERS_LOADING':
            state = { ...state, usersLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default usersReduces