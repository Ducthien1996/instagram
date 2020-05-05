import { takeLatest } from 'redux-saga/effects'
import {
    GET_POST_DETAIL
} from '../../constants/index'
import watchGetPostsDetailSaga, { workGetPostsDetailSaga } from '../../saga/getPostDetailSaga'

describe('test workGetPostDetailSaga', () => {
    let getPostDetailSagaGenator
    const data = 'test'
    beforeEach(() => {
        getPostDetailSagaGenator = workGetPostsDetailSaga()
    })

    it('should dispatch getPostDetail success', () => {
        const selectDescriptor = getPostDetailSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = getPostDetailSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchGetPostDetail Saga', () => {
    const watchGetPostDetail = watchGetPostsDetailSaga();
    it('should start task to watch for GET_POST_DETAIL action', () => {
        const takeLatestDescriptor = watchGetPostDetail.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(GET_POST_DETAIL, workGetPostsDetailSaga));
    });
});