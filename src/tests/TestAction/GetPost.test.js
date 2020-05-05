import {
    getPost,
    getPostSuccess,
    getPostError,
} from '../../actions/index'

import {
    GET_POST,
    GET_POST_SUCCES,
    GET_POST_ERROR,
} from '../../constants/index'

describe('Test getPost action', () => {
    it('Should call GetPost action', () => {
        const expectedActions = {
            type: GET_POST,
        }
        expect(getPost()).toEqual(expectedActions)
    })

    it('Should call getPostSuccess', () => {
        const data = 'userTest'
        const expectedAction = {
            type: GET_POST_SUCCES,
            data: data
        }
        expect(getPostSuccess(data)).toEqual(expectedAction)
    })

    it('Should call getPostError', () => {
        const error = [test]
        const expectedAction = {
            type: GET_POST_ERROR,
            error
        }
        expect(getPostError(error)).toEqual(expectedAction)
    })
})