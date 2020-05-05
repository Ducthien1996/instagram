import {
   getPostsDetail,
   getPostsDetailSuccess,
   getPostsDetailError
} from '../../actions/index'

import {
   GET_POST_DETAIL,
   GET_POST_DETAIL_SUCCESS,
   GET_POST_DETAIL_ERROR
} from '../../constants/index'

describe('Test getDetailPost action', () => {
    it('Should call GetPost action', () => {
        const postId = 1
        const expectedActions = {
            type: GET_POST_DETAIL,
            postId : postId
        }
        expect(getPostsDetail(postId)).toEqual(expectedActions)
    })

    it('Should call getPostDetailSuccess', () => {
        const data = 'userTest'
        const expectedAction = {
            type: GET_POST_DETAIL_SUCCESS,
            data : data
        }
        expect(getPostsDetailSuccess(data)).toEqual(expectedAction)
    })

    it('Should call getPostDetailError', () => {
        const error = [test]
        const expectedAction = {
            type: GET_POST_DETAIL_ERROR,
            error
        }
        expect(getPostsDetailError(error)).toEqual(expectedAction)
    })
})