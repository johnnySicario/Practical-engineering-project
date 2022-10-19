
import { axios } from 'axios';
import { api } from './../api';

export const getAllPublications = () => async dispatch => {
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : true})
    // let resp = await axios.get(`${api}/publication`)
    // dispatch({ type : 'GET_ALL_PUBLICATION', payload : resp.data})
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : false})
}

export const getAddPublications = (data) => async (dispatch) => {
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : true })
    console.log(data);
    // let resp = await axios.post(`${api}/publication`)
    // dispatch({ type : 'GET_ALL_USERS', payload : resp.data})
    dispatch({ type : 'SET_PUBLICATION_LOADING' , payload : false })
}