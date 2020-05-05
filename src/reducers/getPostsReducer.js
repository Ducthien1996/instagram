import {
    GET_POST,
    GET_POST_SUCCES,
    GET_POST_ERROR,
    GET_MORE_POST,
    GET_MORE_POST_SUCCESS,
    GET_MORE_POST_ERROR,
    LIKE,
    LIKE_SUCCESS,
} from '../constants/index'
import { isEmpty } from 'lodash'

const getPostsInitialState = {
    isFetching: false,
    posts: [],
    currentPage: 0,
    totalPage: 0,
    isLiked: false,
}
const getPostsReducer = (state = getPostsInitialState, action) => {
    switch (action.type) {
        case GET_POST:
            return state
        case GET_POST_SUCCES:
            return {
                ...state,
                isFetching: false,
                posts: action.data.posts,
                totalPage: action.data.totalPage,
            }
        case GET_POST_ERROR:
            return {
                ...state,
                isFetching: false
            }
        case GET_MORE_POST:
            return {
                ...state,
                isFetching: true,

            }
        case GET_MORE_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentPage: state.currentPage + 1,
                posts: isEmpty(action.posts) ? state.posts : state.posts.concat(action.posts),
            }
        case GET_MORE_POST_ERROR:
            return {
                ...state,
                isFetching: false,
            }
        case LIKE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            isLiked: !post.isLiked,
                            likeCount: state.isLiked ? state.likeCount + 1: state.likeCount - 1,
                        }
                    } else {
                        return post
                    }
                })
            }
        case LIKE_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            isLiked: !post.isLiked,
                        }
                    } else {
                        return post
                    }
                })
            }
        default:
            return state
    }
}

export default getPostsReducer