import {
    likePost,
    likePostError,
    likePostSuccess,
} from '../../actions/index'

import {
    LIKE,
    LIKE_ERROR,
    LIKE_SUCCESS,
} from '../../constants/index'

describe('Test Like action', () => {
    it('Should call Like action', () => {
        const postId = 1
        const userId = 2
        const expectedActions = {
            type: LIKE,
            postId,
            userId
        }
        expect(likePost(postId, userId)).toEqual(expectedActions)
    })

    it('Should call likePostSuccess', () => {
        const isLiked = true
        const expectedAction = {
            type: LIKE_SUCCESS,
            isLiked : isLiked
        }
        expect(likePostSuccess(isLiked)).toEqual(expectedAction)
    })

    it('Should call likePostError', () => {
        const errors = 'errors'
        const expectedAction = {
            type: LIKE_ERROR,
            errors
        }
        expect(likePostError(errors)).toEqual(expectedAction)
    })
})