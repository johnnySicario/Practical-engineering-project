import axios from 'axios'
import { toast } from 'react-toastify'
import { api } from '../api'

export const getAllContacts = () => async dispatch => {
    dispatch({ type : 'SET_COMMENTS_LOADING' , payload : true})
    let resp = await axios.get(`${api}/contact`)
    dispatch({ type : 'GET_ALL_COMMENTS', payload : resp.data})
    dispatch({ type : 'SET_COMMENTS_LOADING' , payload : false})
}

export const getAddContacts = (data) => async (dispatch) => {
    dispatch({ type : 'SET_COMMENTS_LOADING' , payload : true })
    let resp = await axios.post(`${api}/contact` , data)
    dispatch({ type : 'SET_COMMENTS_LOADING' , payload : false })
    await toast.success('Your Message is sended!' , {position : "bottom-right"})
}

export const getDeleteContact = (id) => async (dispatch) => {
    dispatch({ type : 'SET_COMMENTS_LOADING' , payload : true })
    await axios.delete(`${api}/contact/${id}`)
    dispatch({ type : 'GET_DELETE_COMMENTS' , payload : id })
    dispatch({ type : 'SET_COMMENTS_LOADING' , payload : false })
}