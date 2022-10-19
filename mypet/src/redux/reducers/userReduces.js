
const initialState = {
    users : [],
    usersLoading: false
}


const usersReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
                state = { ...state, users: action.payload }
                return state
        case 'SET_USERS_LOADING':
            state = { ...state, usersLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default usersReduces