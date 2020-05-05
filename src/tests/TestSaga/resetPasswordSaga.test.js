import { takeLatest } from 'redux-saga/effects'
import {
    RESET_PASSWORD
} from '../../constants/index'

import watchResetPasswordSaga, { workResetPasswordSaga } from '../../saga/resetPasswordSaga'

describe('test workGetPost saga', () => {
    let addResetPasswordSagaGenator
    const data = 'test'
    beforeEach(() => {
        addResetPasswordSagaGenator = workResetPasswordSaga()
    })

    it('should dispatch addComment success', () => {
        const selectDescriptor = addResetPasswordSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = addResetPasswordSagaGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('watchResetPasswordSaga', () => {
    const watchResetPassword = watchResetPasswordSaga();
    it('should ADD_COMMENT action', () => {
        const takeLatestDescriptor = watchResetPassword.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(RESET_PASSWORD, workResetPasswordSaga));
    });
});