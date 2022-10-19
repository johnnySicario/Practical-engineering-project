const initialState = {
    publications : [],
    publicationsLoading: false
}


const publicationsReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PUBLICATION':
                state = { ...state, publications: action.payload }
            return state
        case '' :
                state = { ...state, publications : [...action.payload]   }
            return state
        case 'SET_PUBLICATION_LOADING':
                state = { ...state, publicationsLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default publicationsReduces