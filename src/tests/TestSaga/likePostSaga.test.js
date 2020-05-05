import { takeLatest } from 'redux-saga/effects'
import {
    LIKE
} from '../../constants/index'
import watchLikePostSaga, { workLikePostSaga } from '../../saga/likePostSaga'

describe('test workLikePostSaga saga', () => {
    let likePostSagaGenator
    const data = 'test'
    beforeEach(() => {
        likePostSagaGenator = workLikePostSaga()
    })

    it('should dispatch likePost success', () => {
        const selectDescriptor = likePostSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = likePostSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchLikePostSaga Saga', () => {
    const watchLikePost = watchLikePostSaga();
    it('should ADD_COMMENT action', () => {
        const takeLatestDescriptor = watchLikePost.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(LIKE, workLikePostSaga));
    });
});