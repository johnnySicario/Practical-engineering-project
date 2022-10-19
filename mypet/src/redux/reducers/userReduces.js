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
            console.log(action.payload)
            axios.put(api + "/users/" + action.payload._id, action.payload);
            let arrUpdate = state.users;
            let index = arrUpdate.findIndex(x => x.id == action.payload._id)
            if (index >= 0) {
                arrUpdate[index] = { ...arrUpdate[index], ...action.payload };
            }
            state = { ...state, users: arrUpdate }
            return state;
        case 'DELETE_USERS':
            axios.delete(api + "/users/" + action.payload);
            let arrDelete = state.users.filter(user => {
                console.log(user._id)
                if (user._id !== action.payload) {
                    return user;
                }
            })
            state = { ...state, users: arrDelete }
            return state;
        case 'SET_USERS_LOADING':
            state = { ...state, usersLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default usersReduces