import {
    GET_POST_DETAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_ERROR,
    LIKE,
    LIKE_SUCCESS,
} from '../constants/index'
const postDetailInitialState = {
    postDetail: {},
    isLiked: false,
    likeCount: 0
}
const getPostDetailReducer = (state = postDetailInitialState, action) => {
    switch (action.type) {
        case GET_POST_DETAIL:
            return state
        case GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                postDetail: action.data,
                likeCount: action.data.likeCount
            }
        case GET_POST_DETAIL_ERROR:
            return state
        case LIKE:
            return {
                ...state,
                postDetail: (state.postDetail.id === action.postId) ? {
                    ...state.postDetail, isLiked: !state.postDetail.isLiked
                } : { ...state.postDetail }
            }
        case LIKE_SUCCESS:
            return {
                ...state,
                isLiked: action.isLiked.isLiked,
                likeCount: action.isLiked.isLiked ? state.likeCount + 1 : state.likeCount - 1,
            }
        default:
            return state
    }
}

export default getPostDetailReducer