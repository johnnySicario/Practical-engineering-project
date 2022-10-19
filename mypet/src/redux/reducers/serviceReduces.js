
const initialState = {
    services : [],
    servicesLoading: false
}


const servicesReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL':
                state = { ...state, services: action.payload }
            return state
        case 'SET_SERVICES_LOADING':
            state = { ...state, servicesLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default servicesReduces