
import axios from 'axios';
import { api } from './../api';
import { toast } from 'react-toastify';

export const getAllPublications = () => async dispatch => {
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : true})
    let resp = await axios.get(`${api}/publication`)
    dispatch({ type : 'GET_ALL_PUBLICATION', payload : resp.data})
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : false})
}

export const getAddPublications = (data) => async (dispatch) => {
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : true })
    let resp = await axios.post(`${api}/publication` , data)
    dispatch({ type : 'GET_ADD_PUBLICATION', payload : resp.data})
    await toast.success('The Publication added!' , {position : "bottom-right"})
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : false })
}