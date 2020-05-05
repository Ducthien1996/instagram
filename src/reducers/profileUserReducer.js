import {
    PROFILE_USER_POST_FAILED,
    PROFILE_USER_POST_REQUESTED,
    PROFILE_USER_POST_SUCCESS
} from "../constants";

const InitialState = {
    post: {}
}
const profileUserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case PROFILE_USER_POST_REQUESTED:
            return state;
        case PROFILE_USER_POST_SUCCESS:
            return {
                ...state,
                posts: action.posts || ''
            }
        case PROFILE_USER_POST_FAILED:
            return {
                ...state,

            }
        default:
            return state
    }
}

export default profileUserReducer
