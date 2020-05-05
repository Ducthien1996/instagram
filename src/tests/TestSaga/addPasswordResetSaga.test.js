import { takeLatest } from 'redux-saga/effects'
import {
    ADD_PASSWORD_RESET
} from '../../constants/index'
import watchAddPasswordResetSaga, { workAddPasswordResetSaga } from '../../saga/addPasswordResetSaga';

describe('test workAddPasswordResetSaga', () => {
    let addPasswordResetSagaGenator
    const data = 'test'
    beforeEach(() => {
        addPasswordResetSagaGenator = workAddPasswordResetSaga()
    })

    it('should dispatch addPasswordReset success', () => {
        const selectDescriptor = addPasswordResetSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = addPasswordResetSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchAddPasswordResetSaga', () => {
    const watchGetPost = watchAddPasswordResetSaga()
    it('should  ADD_PASSWORD_RESET action', () => {
        const takeLatestDescriptor = watchGetPost.next().value
        expect(takeLatestDescriptor).toEqual(takeLatest(ADD_PASSWORD_RESET, workAddPasswordResetSaga))
    })
})