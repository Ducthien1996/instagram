import {
    UPLOAD_IMAGE,
    UPLOAD_POST_FAILED,
    UPLOAD_POST_REQUESTED,
    UPLOAD_POST_SUCCESS
} from "../constants"

const initialState = {
    isRedirect: ''
}
export const uploadPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE:
            return {
                ...state,
                data: action.data,
                isRedirect: false
            }
        case UPLOAD_POST_REQUESTED:
            return {
                ...state,
                isRedirect: false
            }
        case UPLOAD_POST_SUCCESS:
            return {
                ...state,
                isRedirect: true
            }
        case UPLOAD_POST_FAILED:
            return {
                ...state,
                isRedirect: false
            }
        default:
            return state
    }
}
