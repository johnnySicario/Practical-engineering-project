import axios from 'axios'
import exportedObject from '../../utils/authenticationUtils'

export const getAuthAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    exportedObject.loginUser(data).then(resp => {
        localStorage.setItem('token' , JSON.stringify( resp.data.token))
        dispatch({type : 'GET_LOGIN', payload : resp.data})
    }).catch((err) => {
        console.log(err.response.data.passwordincorrect || err.response.data.emailnotfound);
    })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}

export const getUserLoading = () => async (dispatch , getState) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    let token = getState()?.users?.token
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
    if(token) {
        dispatch({ type : 'LOAD_USER_AUTH' , payload : token})
    } else return null
}

export const getLogOut = () => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    localStorage.removeItem('token')
    dispatch({ type : 'LOGOUT_AUTH' })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}
