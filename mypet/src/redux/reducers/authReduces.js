import jwtDecode from 'jwt-decode'

const initialState = {
    token : localStorage.getItem('token'),
    auth : {
            id : null,
            username : null,
            admin : null
        },
    authLoading: false
}


const authReduces = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            // Take the user details
            let data = jwtDecode(action.payload.token);
            // state = { ...state, token: action.payload.token }
            return  { ...initialState, 
                token: action.payload.token,
                auth: { id : data.id ,username : data.username , admin : data.tag } 
            }
            case 'LOAD_USER_AUTH':
            let data1 = jwtDecode(action.payload.token);
            return  { ...initialState, 
                token: action.payload.token,
                auth: { id : data1.id ,username : data1.username , admin : data1.tag } 
            }
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