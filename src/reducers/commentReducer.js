import {
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
    GET_MORE_COMMENT,
    GET_MORE_COMMENT_SUCCESS,
    GET_MORE_COMMENT_ERROR,
} from '../constants/index'
import { isEmpty } from 'lodash'

const commentInitialState = {
    isFetching: false,
    comments: [],
    currentPage: 1,
    totalPage: 0,
}

const commentReducer = (state = commentInitialState, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
            }
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                comments: action.comments,
                totalPage: action.totalPage,
                currentPage: 1
            }
        case ADD_COMMENT:
            return {
                ...state,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                comments: isEmpty(state.comments) ? [action.comments] : [action.comments, ...state.comments],
            }
        case ADD_COMMENT_ERROR:
            return {
                ...state,
            }
        case GET_MORE_COMMENT:
            return {
                ...state,
                isFetching: true
            }
        case GET_MORE_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentPage: state.currentPage + 1,
                comments: isEmpty(action.comments) ? state.comments : state.comments.concat(action.comments),
            }
        case GET_MORE_COMMENT_ERROR:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}

export default commentReducer