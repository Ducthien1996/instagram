import {
    addComment,
    addCommentSuccess,
    addCommentError,
} from '../../actions/index'

import {
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR
} from '../../constants/index'

describe('Test getDetailPost action', () => {
    it('Should call GetPost action', () => {
        const postId = 1
        const data = 'test'
        const expectedActions = {
            type: ADD_COMMENT,
            data,
            postId
        }
        expect(addComment(data, postId)).toEqual(expectedActions)
    })

    it('Should call addCommentSuccess', () => {
        const comments = 'userTest'
        const expectedAction = {
            type: ADD_COMMENT_SUCCESS,
            comments: comments
        }
        expect(addCommentSuccess(comments)).toEqual(expectedAction)
    })

    it('Should call addCommentError', () => {
        const errors = [test]
        const expectedAction = {
            type: ADD_COMMENT_ERROR,
            errors
        }
        expect(addCommentError(errors)).toEqual(expectedAction)
    })
})