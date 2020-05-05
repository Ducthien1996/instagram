import {
    SIGN_UP_FAILED,
    SIGN_UP_REQUESTED,
    SIGN_UP_SUCCESSED
} from "../constants"

const nameInitialState = {
    isSignUpSuccess: '',
    isDisable: false,
    error : '',

}
export const signUpReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case SIGN_UP_REQUESTED:
            return {
                ...state,
                isDisable: true,
                error : null
            };
        case SIGN_UP_SUCCESSED:
            return {
                ...state,
                token: action.token || '',
                isSignUpSuccess: true,
                isDisable : false,
                error : ''
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                error: action.error,
                isDisable: false,
                isSignUpSuccess : false
            }
        default:
            return state
    }
}
