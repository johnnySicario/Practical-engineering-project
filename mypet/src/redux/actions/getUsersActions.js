import axios from 'axios'

export const getUsersAction = () => async (dispatch) => {
    dispatch({ type : 'SET_USERS_LOADING' , payload : true })
    let user = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({ type : 'GET_USERS' , payload : user.data })
    dispatch({ type : 'SET_USERS_LOADING' , payload : false })
}