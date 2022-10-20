import axios from 'axios';
import { api } from "../api";

const initialState = {
    users: [],
    usersLoading: false
}


const usersReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            state = { ...state, users: action.payload }
            return state;
        case 'GET_BY_ID_USERS':
            console.log("GBID")
            state = { ...state, users: action.payload }
            return state;
        case 'ADD_USERS':
            axios.post(api + "/users", action.payload);
            let arrAdd = state.users.push(action.payload);
            state = { ...state, users: arrAdd }
            return state;
        case 'UPDATE_USERS':
            console.log(action.payload.data)
            let userUpdate = state.users.find(item => item._id === action.payload.id.id)
            userUpdate.username = !action.payload.data.username ? userUpdate.username : action.payload.data.username
            userUpdate.email = !action.payload.data.email ? userUpdate.email : action.payload.data.email
            userUpdate.fName = !action.payload.data.fName ? userUpdate.fName : action.payload.data.fName
            userUpdate.lName = !action.payload.data.lName ? userUpdate.lName : action.payload.data.lName
            userUpdate.petBreed = !action.payload.data.petBreed ? userUpdate.petBreed : action.payload.data.petBreed
            userUpdate.phoneNumber = !action.payload.data.phoneNumber ? userUpdate.phoneNumber : action.payload.data.phoneNumber
            userUpdate.photo = !action.payload.data.photo ? userUpdate.photo : action.payload.data.photo
            userUpdate.age = !action.payload.data.age ? userUpdate.age : action.payload.data.age
            userUpdate.admin = !action.payload.data.admin ? userUpdate.age : action.payload.data.age
            state = { ...state, users : state.users.map(user => 
                user._id === action.payload.id.id ? userUpdate : user
            )}
            return state;
        case 'DELETE_USERS':
            state = { ...state, users : state.users.filter(user => user._id !== action.payload ) }
            return state;
        case 'SET_USERS_LOADING':
            state = { ...state, usersLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default usersReduces