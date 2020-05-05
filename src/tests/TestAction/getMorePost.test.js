import {
    getMorePosts,
    getMorePostSuccess,
    getMorePostError
} from '../../actions/index'

import {
    GET_MORE_POST,
    GET_MORE_POST_SUCCESS,
    GET_MORE_POST_ERROR
} from '../../constants/index'

describe('Test getMorePost action', () => {
    it('Should call getMorePost action', () => {
        const currentPage = 1
        const expectedActions = {
            type: GET_MORE_POST,
            currentPage
        }
        expect(getMorePosts(currentPage)).toEqual(expectedActions)
    })

    it('Should call getMorePostSuccess', () => {
        const posts = 'userTest'
        const expectedAction = {
            type: GET_MORE_POST_SUCCESS,
            posts
        }
        expect(getMorePostSuccess(posts)).toEqual(expectedAction)
    })

    it('Should call getMorePostError', () => {
        const errors = [test]
        const expectedAction = {
            type: GET_MORE_POST_ERROR,
            errors
        }
        expect(getMorePostError(errors)).toEqual(expectedAction)
    })
})