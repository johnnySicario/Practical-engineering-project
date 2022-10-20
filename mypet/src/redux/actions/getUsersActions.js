import axios from "axios"
import { api } from "../api"
import { toast } from 'react-toastify';


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


export const getUpdateUserAction = (id , data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    await axios.put(`${api}/users/${id.id}` , data)
    dispatch({ type : 'UPDATE_USERS' , payload : {id , data} })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getDeleteUserAction = (id) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    await axios.delete(`${api}/users/${id}`)
    dispatch({ type : 'DELETE_USERS' , payload : id })
    toast.success('The user deleted!' , {position : "bottom-right"})
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getAddProfileUser = (id , data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    await axios.put(`${api}/users/${id.id}` , data)
    dispatch({ type : 'UPDATE_USER' , payload : {id , data} })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}