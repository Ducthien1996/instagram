import { takeLatest } from 'redux-saga/effects'
import {
    GET_COMMENT
} from '../../constants/index'
import watchGetCommentSaga, { workGetCommentSaga } from '../../saga/getCommentSaga';

describe('test workGetCommentSaga saga', () => {
    let getCommentSagaGenator
    const data = 'test'
    beforeEach(() => {
        getCommentSagaGenator = workGetCommentSaga()
    })

    it('should dispatch getComment success', () => {
        const selectDescriptor = getCommentSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = getCommentSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchGetCommentSaga Saga', () => {
    const watchGetComment = watchGetCommentSaga();
    it('should GET_COMMENT action', () => {
        const takeLatestDescriptor = watchGetComment.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(GET_COMMENT, workGetCommentSaga));
    });
});