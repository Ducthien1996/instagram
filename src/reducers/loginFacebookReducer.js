import { LOGIN_FACEBOOK, LOGIN_FACEBOOK_SUCCESS } from "../constants";

const loginFacebookInitialState = {
    data: '',
    isSignUpFb: '',
}
const loginFacebookReducer = (state = loginFacebookInitialState, action) => {
    switch (action.type) {
        case LOGIN_FACEBOOK:
            return {
                ...state,
                isSignUpFb: false
            }
        case LOGIN_FACEBOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                isSignUpFb: true
            }
        default:
            return state
    }
}

export default loginFacebookReducer 