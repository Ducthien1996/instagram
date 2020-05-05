import {
    getPost,
    getPostSuccess,
    getPostError,
    getMorePosts,
    getMorePostSuccess,
    likePost,
    likePostSuccess
} from '../../actions/index'

import getPostsReducer from '../../reducers/getPostsReducer'
import isEmpty from 'lodash/isEmpty'
const getPostsInitialState = {
    isFetching: false,
    posts: [],
    currentPage: 0,
    totalPage: 0,
    isLiked: false,
}

describe('Test GetPost reducer', () => {
    it('Should return initialState', () => {
        const expectResult = getPostsInitialState
        expect(getPostsReducer(undefined, {})).toEqual(expectResult)
    })

    it('Should handle getPost', () => {
        const expectResult = {
            ...getPostsInitialState,
        }
        expect(getPostsReducer(getPostsInitialState, getPost())).toEqual(expectResult)
    })

    it('Should handle getPosts Success', () => {
        const data = 'test'
        const expectResult = {
            ...getPostsInitialState,
            isFetching: false,
            posts: undefined,
            totalPage: undefined,
        }
        expect(getPostsReducer(getPostsInitialState, getPostSuccess(data))).toEqual(expectResult)
    })

    it('Should handle getPosts Error', () => {
        const error = 'test'
        const expectResult = {
            ...getPostsInitialState,
            isFetching: false
        }
        expect(getPostsReducer(getPostsInitialState, getPostError(error))).toEqual(expectResult)
    })
})

describe('Test getMorePost reducer', () => {
    it('Should handle getMorePost', () => {
        const currentPage = 1
        const expectResult = {
            ...getPostsInitialState,
            isFetching: true,
        }
        expect(getPostsReducer(getPostsInitialState, getMorePosts(currentPage))).toEqual(expectResult)
    })

    it('Should handle getMorePosts Success', () => {
        const posts = 'posts'
        const expectResult = {
            ...getPostsInitialState,
            isFetching: false,
            currentPage: getPostsInitialState.currentPage + 1,
            posts: isEmpty(posts) ? getPostsInitialState.posts : getPostsInitialState.posts.concat(posts),
        }
        expect(getPostsReducer(getPostsInitialState, getMorePostSuccess(posts))).toEqual(expectResult)
    })

    it('Should handle getMorePosts Error', () => {
        const errors = 'test'
        const expectResult = {
            ...getPostsInitialState,
            isFetching: false
        }
        expect(getPostsReducer(getPostsInitialState, getPostError(errors))).toEqual(expectResult)
    })
})

describe('Test handle Like reducer', () => {
    it('Test handle like post', () => {
        const postId = 1570
        const userId = 2
        const posts = []
        const expectedResult = {
            ...getPostsInitialState,
            posts: posts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        isLiked: !post.isLiked,
                        likeCount: getPostsInitialState.isLiked ? getPostsInitialState.likeCount + 1 : getPostsInitialState.likeCount - 1,
                    }
                } else {
                    return post
                }
            })
        }
        expect(getPostsReducer(getPostsInitialState, likePost(postId, userId))).toEqual(expectedResult)
    })

    it('Test handle likePost success', () => {
        const isLiked = true
        const postId = 1
        const posts = []
        const expectedResult = {
            ...getPostsInitialState,
            posts: posts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        isLiked: !post.isLiked,
                    }
                } else {
                    return post
                }
            })
        }
        expect(getPostsReducer(getPostsInitialState, likePostSuccess(isLiked))).toEqual(expectedResult)
    })
})
