import {
    getComment,
    getCommentSuccess,
} from '../../actions/index'

import {
    GET_COMMENT,
    GET_COMMENT_SUCCESS
} from '../../constants/index'

describe('Test getComment action', () => {
    it('Should call getComment action', () => {
        const postId = 1
        const expectedActions = {
            type: GET_COMMENT,
            postId,
        }
        expect(getComment(postId)).toEqual(expectedActions)
    })

    it('Should call getCommentSuccess', () => {
        const comments = 'comemnt test'
        const totalPage = 1
        const expectedAction = {
            type: GET_COMMENT_SUCCESS,
            comments,
            totalPage
        }
        expect(getCommentSuccess(comments, totalPage)).toEqual(expectedAction)
    })
})