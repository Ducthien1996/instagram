import {
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS
} from '../constants/index'
const signInInitialState = {
    user: '',
    isSignInSuccess: '',
    error: '',
    isDisable : false,
}
const signInReducer = (state = signInInitialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isDisable : true,
                error: null,
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                isSignInSuccess: false,
                error: action.error,
                isDisable : false,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignInSuccess: true,
                user: action.user,
                error: '',
                isDisable : false
            }
        default:
            return state
    }
}

export default signInReducer;