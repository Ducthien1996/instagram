import { takeLatest } from 'redux-saga/effects'
import {
    SIGN_UP_FACEBOOK
} from '../../constants/index'

import watchSignUpFacebookSaga, { workSignUpFacebookSaga } from '../../saga/SignUpFacebookSaga';

describe('Test SignUp facebook', () => {
    let signUpFacebookGenator
    beforeEach(() => {
        signUpFacebookGenator = workSignUpFacebookSaga()
    })

    it('should dispatch signUp facebook success', () => {
        const selectDescriptor = signUpFacebookGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
    })

    it('should dispatch signUp facebook have data', () => {
        const user = {
            id: 5,
            username: "thiendt",
            fullname: "Dinh Trong Thien",
            email: "thiendt@relipasoft.com",
            avatar: "rale.jpg"
        }
        const callDescriptor = signUpFacebookGenator.next(user).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('Test watchSignUpFacebookSaga', () => {
    const watchSignUpFacebook = watchSignUpFacebookSaga();
    it('should start task to watch for sign up facebook action', () => {
        const takeLatestDescriptor = watchSignUpFacebook.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(SIGN_UP_FACEBOOK, workSignUpFacebookSaga));
    });
});