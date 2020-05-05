import { takeLatest } from 'redux-saga/effects'
import {
    GET_POST
} from '../../constants/index'
import watchGetPostSaga, { workGetPostSaga } from '../../saga/getPostSaga'

describe('test workGetPost saga', () => {
    let getPostSagaGenator
    const data = 'test'
    beforeEach(() => {
        getPostSagaGenator = workGetPostSaga()
    })

    it('should dispatch getPost success', () => {
        const selectDescriptor = getPostSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = getPostSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchGetPost Saga', () => {
    const watchGetPost = watchGetPostSaga();
    it('should start task to watch for GET_POST action', () => {
        const takeLatestDescriptor = watchGetPost.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(GET_POST, workGetPostSaga));
    });
});