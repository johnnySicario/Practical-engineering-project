import axios from 'axios'
import { toast } from 'react-toastify'
import { api } from '../api'

export const getAuthAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    await axios.post(`${api}/authentication/login` , data).then(resp => {
        localStorage.setItem('token' , JSON.stringify( resp.data.token))
        dispatch({type : 'GET_LOGIN', payload : resp.data})
        toast.success("Login Successfully" , {position : "bottom-right"})
    }).catch((err) => {
        toast.error(err.response.data.passwordincorrect || err.response.data.emailnotfound , {position : "bottom-right"})
    })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getUserLoading = () => async (dispatch , getState) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    let token = getState()?.auth?.token
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
    if(token) {
        dispatch({ type : 'LOAD_USER_AUTH' , payload : {token}})
    } else return null
}

export const getLogOut = () => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    localStorage.removeItem('token')
    dispatch({ type : 'LOGOUT_AUTH' })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getSignUp = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    await axios.post(`${api}/authentication/register` , data).then((user) => {
        toast.success('The registration was successful' , {position : "bottom-right"})
        dispatch(getAuthAction({ email : data.email , password : data.password }))
    }).catch((err) => {
        toast.error(err.response.data.email , {position : "bottom-right"})
    })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}


