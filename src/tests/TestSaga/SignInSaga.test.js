import { takeLatest } from 'redux-saga/effects'
import {
    SIGN_IN
} from '../../constants/index'

import watchSignInSaga, { workSignInSaga } from '../../saga/signInSaga'

describe('Test workGetPostSaga', () => {
    let signInSagaGenator
    beforeEach(() => {
        signInSagaGenator = workSignInSaga()
    })

    it('should dispatch signin success', () => {
        const user = {
            avatar: "https://image.thanhnien.vn/660/uploaded/vietthong/2017_07_26/hotgirl-sam-ghien-gunpow-tan-the-gioi-02_rale.jpg",
            email: "thiendt@relipasoft.com",
            fullname: "Dinh Trong Thien",
            id: 5,
            username: "thiendt"
        }
        const selectDescriptor = signInSagaGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
        const callDescriptor = signInSagaGenator.next(user).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('Test WatchSignInSaga', () => {
    const watchSignIn = watchSignInSaga();
    it('should start task to watch for SIGN_IN action', () => {
        const takeLatestDescriptor = watchSignIn.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(SIGN_IN, workSignInSaga));
    });
});