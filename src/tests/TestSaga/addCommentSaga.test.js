import { takeLatest } from 'redux-saga/effects'
import {
    ADD_COMMENT
} from '../../constants/index'
import watchAddCommentSaga, { workAddCommentSaga } from '../../saga/addCommentSaga';

describe('test workGetPost saga', () => {
    let addCommentSagaGenator
    const data = 'test'
    beforeEach(() => {
        addCommentSagaGenator = workAddCommentSaga()
    })

    it('should dispatch addComment success', () => {
        const selectDescriptor = addCommentSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = addCommentSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchAddCommentSaga Saga', () => {
    const watchAddComment = watchAddCommentSaga();
    it('should ADD_COMMENT action', () => {
        const takeLatestDescriptor = watchAddComment.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(ADD_COMMENT, workAddCommentSaga));
    });
});