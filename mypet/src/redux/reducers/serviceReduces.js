const initialState = {
    services: [],
    servicesLoading: false
}


const servicesReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_SERVICES':
            state = { ...state, services: action.payload }
            return state
        case 'SET_SERVICES_LOADING':
            state = { ...state, servicesLoading: action.payload }
            return state
        case 'DELETE_SERVICES':
            state = {
                ...state, services: state.services.filter(service => {
                    console.log(service._id)
                    if (service._id !== action.payload) {
                        return service;
                    }
                })
            }
            return state
        default:
            return state;
    }
}

export default servicesReduces