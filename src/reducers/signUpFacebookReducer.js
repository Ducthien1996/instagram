import {
    SIGN_UP_FACEBOOK,
    SIGN_UP_FACEBOOK_SUCCESS,
    SIGN_UP_FACEBOOK_ERROR
} from '../constants/index'
const signUpFacebookInitialState = {
    user: '',
    isSignUpSuccess: '',
    error: '',
    isDisable: false,
}
const signUpFacebookReducer = (state = signUpFacebookInitialState, action) => {
    switch (action.type) {
        case SIGN_UP_FACEBOOK:
            return {
                ...state,
                isDisable: true
            }
        case SIGN_UP_FACEBOOK_ERROR:
            return {
                ...state,
                isSignUpSuccess: false,
                error: action.error,
                isDisable: false,
            }
        case SIGN_UP_FACEBOOK_SUCCESS:
            return {
                ...state,
                isSignUpSuccess: true,
                user: action.user,
                isDisable: false
            }
        default:
            return state
    }
}

export default signUpFacebookReducer; 