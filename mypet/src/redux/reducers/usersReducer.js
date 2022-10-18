import jwtDecode from 'jwt-decode'

const initialState = {
    users: [],
    token : localStorage.getItem('token'),
    usersLoading: false
}


const usersReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            // Take the user details
            // let data = jwtDecode(action.payload.token);
                state = { ...state, token: action.payload.token }
            return state
        case 'LOAD_USER_AUTH':
            state = { ...state, token: action.payload }
            return state
        case 'SET_USERS_LOADING':
            state = { ...state, usersLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default usersReduces