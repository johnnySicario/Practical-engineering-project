import axios from "axios"
import { api } from "../api"


export const getUsersAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    let resp = await axios.get(`${api}/users`)
    dispatch({ type : 'GET_ALL_USERS', payload : resp.data})
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}