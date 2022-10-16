import axios from 'axios'

export const getUsersAction = () => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    dispatch({ type : 'GET_USERS' , payload : user.data })
    dispatch({ type : 'GET_USER' , payload : user.data })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}