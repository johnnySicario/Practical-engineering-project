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
            let userUpdate = state.users.find(item => item._id === action.payload.id.id)
            userUpdate.username = action.payload.data.username
            userUpdate.email = action.payload.data.email
            userUpdate.admin = action.payload.data.admin
            state = { ...state, users : state.users.map(user => 
                user._id === action.payload.id.id ? userUpdate : user
            )}
            return state;
        case 'UPDATE_USER':
            // let userUpdate = state.users.find(item => item._id === action.payload.id.id)
            // userUpdate.username = action.payload.data.username
            // userUpdate.email = action.payload.data.email
            // userUpdate.admin = action.payload.data.admin
            // state = { ...state, users : state.users.map(user => 
            //     user._id === action.payload.id.id ? userUpdate : user
            // )}
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