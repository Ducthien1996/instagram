import {
    getPostsDetail,
    getPostsDetailSuccess,
    getPostsDetailError,
    likePost,
    likePostSuccess
} from '../../actions/index'
import { isEmpty } from 'lodash'
import getPostDetailReducer from '../../reducers/getPostDetailReducer'

let postDetailInitialState = {
    postDetail: {},
    isLiked: false,
    likeCount: 0
}

describe('Test getPostDetail reducer', () => {
    it('Should return initialState', () => {
        const expectResult = postDetailInitialState
        expect(getPostDetailReducer(undefined, {})).toEqual(expectResult)
    })
    it('Should handle getPostDetail ', () => {
        const postId = 1
        const expectResult = {
            ...postDetailInitialState,
        }
        expect(getPostDetailReducer(postDetailInitialState, getPostsDetail(postId))).toEqual(expectResult)
    })
    it('Should handle getPostDetail success', () => {
        const data = {
            id: 1570,
            likeCount: 3,
            commentCount: 16,
            isLiked: true
        }
        const likeCount = 3
        const expectResult = {
            ...postDetailInitialState,
            postDetail: data,
            likeCount: likeCount
        }
        expect(getPostDetailReducer(postDetailInitialState, getPostsDetailSuccess(data))).toEqual(expectResult)
    })

    it('Should handle getPostDetail Error', () => {
        const error = 'error'
        const expectResult = {
            ...postDetailInitialState,
        }
        expect(getPostDetailReducer(postDetailInitialState, getPostsDetailError(error))).toEqual(expectResult)
    })
})
