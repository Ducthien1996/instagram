import {
    getMoreComment,
    getMoreCommentSuccess,
    getMoreCommentError,
} from '../../actions/index'

import {
    GET_MORE_COMMENT,
    GET_MORE_COMMENT_SUCCESS,
    GET_MORE_COMMENT_ERROR,
} from '../../constants/index'

describe('Test getMoreComment action', () => {
    it('Should call getMoreComment action', () => {
        const postId = 1
        const currentPage = 1
        const expectedActions = {
            type: GET_MORE_COMMENT,
            postId,
            currentPage,
        }
        expect(getMoreComment(postId, currentPage)).toEqual(expectedActions)
    })

    it('Should call getMoreCommentSuccess', () => {
        const comments = 'comemnt test'
        const expectedAction = {
            type: GET_MORE_COMMENT_SUCCESS,
            comments
        }
        expect(getMoreCommentSuccess(comments)).toEqual(expectedAction)
    })

    it('Should call getMoreCommentError', () => {
        const errors = [test]
        const expectedAction = {
            type: GET_MORE_COMMENT_ERROR,
            errors
        }
        expect(getMoreCommentError(errors)).toEqual(expectedAction)
    })
})