import { takeLatest } from 'redux-saga/effects'
import {
    GET_MORE_COMMENT
} from '../../constants/index'
import watchGetMoreCommentSaga, { workGetMoreCommentSaga } from '../../saga/getMoreCommentSaga';

describe('test workGetMorePost saga', () => {
    let getMoreCommentSagaGenator
    const data = 'test'
    beforeEach(() => {
        getMoreCommentSagaGenator = workGetMoreCommentSaga()
    })

    it('should dispatch getMoreComment success', () => {
        const selectDescriptor = getMoreCommentSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = getMoreCommentSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchGetMoreCommentSaga Saga', () => {
    const watchGetMoreComment = watchGetMoreCommentSaga();
    it('should GET_MORE_COMMENT action', () => {
        const takeLatestDescriptor = watchGetMoreComment.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(GET_MORE_COMMENT, workGetMoreCommentSaga));
    });
});