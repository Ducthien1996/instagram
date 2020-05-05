import {
    GET_MORE_POST_USER_FAILED,
    GET_MORE_POST_USER_REQUESTED, GET_MORE_POST_USER_SUCCESS,
    GET_POST_USER_FAILED,
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
} from "../constants";
import _isEmpty from 'lodash/isEmpty'

const InitialState = {
    posts: [],
    currentPage: 1,
    totalPage: 0
}
export const getPostUserReducer = (state = InitialState, action) => {
    switch (action.type) {

        case GET_POST_USER_REQUESTED:
            return state
        case GET_POST_USER_SUCCESS:
            return {
                ...state,
                posts: action.posts.posts,
                totalPage: action.posts.totalPage
            }
        case GET_POST_USER_FAILED:
            return {
                ...state,
            }
        case GET_MORE_POST_USER_REQUESTED:
            return {
                ...state,
            }
        case GET_MORE_POST_USER_SUCCESS:
            return {
                ...state,
                posts: _isEmpty(action.posts.posts) ? state.posts : state.posts.concat(action.posts.posts),
                currentPage: state.currentPage + 1,

            }
        case GET_MORE_POST_USER_FAILED:
            return {
                ...state,
            }
        default:
            return state
    }
}
