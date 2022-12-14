import axios from 'axios';
import { api } from "../api";

const initialState = {
    services: [],
    servicesLoading: false
}


const servicesReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_SERVICES':
            state = { ...state, services: action.payload }
            return state;
        case 'ADD_SERVICES':
            axios.post(api + "/service",action.payload)
            let serviceToAdd = state.services;
            serviceToAdd.push(action.payload);
            state = { ...state, services: serviceToAdd }
            return state;
        case 'DELETE_SERVICES':
            axios.delete(api + "/service/" + action.payload);
            let serviceToDelete = state.services.filter((service) => {
                if (service._id !== action.payload) {
                    return service;
                }
            })
            state = { ...state, services: serviceToDelete }
            return state;
        case 'SET_SERVICES_LOADING':
            state = { ...state, servicesLoading: action.payload }
            return state;

        default:
            return state;
    }
}

export default servicesReduces