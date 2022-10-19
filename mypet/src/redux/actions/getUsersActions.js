import axios from "axios"
import { api } from "../api"


export const getUsersAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    let resp = await axios.get(`${api}/users`)
    dispatch({ type : 'GET_ALL_USERS', payload : resp.data})
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getUserByIdAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    dispatch({ type : 'GET_BY_ID_USERS' , payload : data.payload })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getAddUserAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    dispatch({ type : 'ADD_USERS' , payload : data.payload })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}


export const getUpdateUserAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    dispatch({ type : 'UPDATE_USERS' , payload : data.payload })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getDeleteUserAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    dispatch({ type : 'DELETE_USERS' , payload : data.payload })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}