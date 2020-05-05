import {
   RESET_PASSWORD,
   RESET_PASSWORD_ERROR,
   RESET_PASSWORD_SUCCESS,
   SAVE_TOKEN,
   ADD_PASSWORD_RESET,
   ADD_PASSWORD_RESET_ERROR,
   ADD_PASSWORD_RESET_SUCCESS,
} from '../constants/index'
const resetPasswordInitialState = {
    isResetSuccess: '',
    error: '',
    isDisable : false,
    token: '',
}
const resetPasswordReducer = (state = resetPasswordInitialState, action) => {
    switch (action.type) {
        case RESET_PASSWORD:
            return {
                ...state,
                isDisable : true,
                error : null
            }
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                isResetSuccess: false,
                error: action.error,
                isDisable : false,
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                isResetSuccess: true,
                isDisable : false,
            }
        case SAVE_TOKEN:
            return {
                ...state,
                token: action.token,
            }
        case ADD_PASSWORD_RESET:
            return {
                ...state,
                isDisable : true
            }
        case ADD_PASSWORD_RESET_ERROR:
            return {
                ...state,
                isResetSuccess: false,
                error: action.error,
                isDisable : false,
            }
        case ADD_PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                isResetSuccess: true,
                isDisable : false,
            }
        default:
            return state
    }
}

export default resetPasswordReducer