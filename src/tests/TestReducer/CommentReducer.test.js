import {
    getComment,
    getCommentSuccess,
    addComment,
    addCommentSuccess,
    addCommentError,
    getMoreComment,
    getMoreCommentSuccess,
    getMoreCommentError
} from '../../actions/index'
import { isEmpty } from 'lodash'
import commentReducer from '../../reducers/commentReducer'

let commentInitialState = {
    isFetching: false,
    comments: [],
    currentPage: 1,
    totalPage: 0,
}

describe('Test getComment reducer', () => {
    it('Should return initialState', () => {
        const expectResult = commentInitialState
        expect(commentReducer(undefined, {})).toEqual(expectResult)
    })
    it('Should handle getComment', () => {
        const postId = 1
        const expectResult = {
            ...commentInitialState,
        }
        expect(commentReducer(commentInitialState, getComment(postId))).toEqual(expectResult)
    })
    it('Should handle getComment success', () => {
        const comments = 'testComment'
        const totalPage = 1
        const expectResult = {
            ...commentInitialState,
            comments: comments,
            totalPage: totalPage
        }
        expect(commentReducer(commentInitialState, getCommentSuccess(comments, totalPage))).toEqual(expectResult)
    })
})

describe('Test AddComment reducer', () => {
    it('Should return initialState', () => {
        const expectResult = commentInitialState
        expect(commentReducer(undefined, {})).toEqual(expectResult)
    })
    it('Should handle addComment', () => {
        const data = 'test comment'
        const postId = 1
        const expectedResult = {
            ...commentInitialState,
        }
        expect(commentReducer(commentInitialState, addComment(data, postId))).toEqual(expectedResult)
    })
    it('Should return addCommentError', () => {
        const errors = 'errors'
        const expectedResult = {
            ...commentInitialState,
        }
        expect(commentReducer(commentInitialState, addCommentError(errors))).toEqual(expectedResult)
    })
    it('Should return addCommentSuccess', () => {
        const comments = 'comments'
        const expectedResult = {
            ...commentInitialState,
            comments: ['comments']
        }
        expect(commentReducer(commentInitialState, addCommentSuccess(comments))).toEqual(expectedResult)
    })
})

describe('Test GetMoreComment', () => {
    it('Test getMoreComment', () => {
        const postId = 1
        const currentPage = 2
        const expectedResult = {
            ...commentInitialState,
            isFetching: true
        }
        expect(commentReducer(commentInitialState, getMoreComment(postId, currentPage))).toEqual(expectedResult)
    })

    it('Test getMoreComment', () => {
        const comments = 'test Comment'
        const expectedResult = {
            ...commentInitialState,
            isFetching: true,
            currentPage: 1,
            comments: []
        }
        expect(commentReducer(commentInitialState, getMoreComment(comments))).toEqual(expectedResult)
    })

    it('Should return getMoreCommentSuccess', () => {
        const comments = 'comments'
        const expectedResult = {
            ...commentInitialState,
            isFetching: false,
            currentPage: commentInitialState.currentPage + 1,
            comments: ['comments']
        }
        expect(commentReducer(commentInitialState, getMoreCommentSuccess(comments))).toEqual(expectedResult)
    })

    it('Should getMoreCommentError', () => {
        const errors = 'errors'
        const expectedResult = {
            ...commentInitialState,
            isFetching: false
        }
        expect(commentReducer(commentInitialState, getMoreCommentError(errors))).toEqual(expectedResult)
    })
})