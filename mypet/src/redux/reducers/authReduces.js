import jwtDecode from 'jwt-decode'

const initialState = {
    token : localStorage.getItem('token'),
    authLoading: false
}


const authReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            // Take the user details
            // let data = jwtDecode(action.payload.token);
                state = { ...state, token: action.payload.token }
            return state
        case 'LOAD_USER_AUTH':
            state = { ...state, token: action.payload }
            return state
        case 'LOGOUT_AUTH':
            state = { ...state, token: null }
            return state
        case 'SET_AUTH_LOADING':
            state = { ...state, authLoading: action.payload }
            return state
        default:
            return state;
    }
}

export default authReduces