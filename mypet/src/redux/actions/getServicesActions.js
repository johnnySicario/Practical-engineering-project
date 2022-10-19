import axios from "axios"
import { api } from "../api"


export const getServicesAction = (data) => async (dispatch) => {
    dispatch({ type : 'SET_SERVICES_LOADING' , payload : true })
    let resp = await axios.get(`${api}/service`)
    dispatch({ type : 'GET_ALL', payload : resp.data})
    dispatch({ type : 'SET_SERVICES_LOADING' , payload : false })
}