import { takeLatest } from 'redux-saga/effects'
import {
    GET_MORE_POST
} from '../../constants/index'
import watchGetMorePostSaga, { workGetMorePostSaga } from '../../saga/getMorePostsSaga';

describe('test workGetMorePost saga', () => {
    let getMorePostSagaGenator
    const data = 'test'
    beforeEach(() => {
        getMorePostSagaGenator = workGetMorePostSaga()
    })

    it('should dispatch getMorePost success', () => {
        const selectDescriptor = getMorePostSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = getMorePostSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchGetMorePost Saga', () => {
    const watchGetMorePost = watchGetMorePostSaga();
    it('should GET_POST action', () => {
        const takeLatestDescriptor = watchGetMorePost.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(GET_MORE_POST, workGetMorePostSaga));
    });
});