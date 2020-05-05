import { takeLatest } from 'redux-saga/effects'
import {
    LOGIN_FACEBOOK
} from '../../constants/index'

import watchLoginFacebookSaga, { workLoginFacebookSaga } from '../../saga/loginFacebookSaga';

describe('Test workGetPostSaga', () => {
    let logInFacebookGenator
    beforeEach(() => {
        logInFacebookGenator = workLoginFacebookSaga()
    })

    it('should dispatch resetPassword success', () => {
        const selectDescriptor = logInFacebookGenator.next().value
        expect(selectDescriptor).toMatchSnapshot()
    })

    it('should dispatch resetPassword success  data', () => {
        const data = {
            accessToken : 'abcyz'
        }
        const callDescriptor = logInFacebookGenator.next(data).value
        expect(callDescriptor).toMatchSnapshot()
    })
})

describe('Test watchLoginFacebookSaga', () => {
    const watchLoginFacebook = watchLoginFacebookSaga();
    it('should start task to watch for login facebook action', () => {
        const takeLatestDescriptor = watchLoginFacebook.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN_FACEBOOK, workLoginFacebookSaga));
    });
});