import axios from "axios"

export const getServicesAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_SERVICES_LOADING' , payload : true })
    let resp = await axios.get('http://localhost:8000/service')
    dispatch({ type : 'GET_ALL', payload : resp.data})
    dispatch({ type : 'SET_SERVICES_LOADING' , payload : false })
}