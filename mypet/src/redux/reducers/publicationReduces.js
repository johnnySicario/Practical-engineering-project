const initialState = {
    publications : [],
    publicationsLoading: false
}


const publicationsReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PUBLICATION':
                state = { ...state, publications: action.payload }
            return state
        case 'GET_ADD_PUBLICATION' :
                state = { ...state, publications : [...action.payload]   }
            return state
        case 'GET_DELETE_PUBLICATION' :
            state = { ...state, publications : state.publications.filter(pub => pub._id !== action.payload ) }
            return state
        case 'SET_PUBLICATION_LOADING':
                state = { ...state, publicationsLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default publicationsReduces