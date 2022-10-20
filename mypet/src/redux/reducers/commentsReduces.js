const initialState = {
    comments : [],
    commentsLoading: false
}

const commentsReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_COMMENTS':
                state = { ...state, comments: action.payload }
            return state
        case 'GET_DELETE_COMMENTS' :
            state = { ...state, comments : state.comments.filter(pub => pub._id !== action.payload ) }
            return state
        case 'SET_COMMENTS_LOADING':
                state = { ...state, commentsLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default commentsReduces