import {
    loginFacebook,
    loginFacebookSuccess,
    signUpFacebook,
    signUpFacebookError,
    signUpFacebookSuccess
} from '../../actions/index'

import {
    LOGIN_FACEBOOK,
    LOGIN_FACEBOOK_SUCCESS,
    SIGN_UP_FACEBOOK,
    SIGN_UP_FACEBOOK_SUCCESS,
    SIGN_UP_FACEBOOK_ERROR,
} from '../../constants/index'

describe('Test Login with facebook action', () => {
    it('Should call login facebook action', () => {
        const accessToken = 'abcxyz'
        const expectedActions = {
            type: LOGIN_FACEBOOK,
            accessToken
        }
        expect(loginFacebook(accessToken)).toEqual(expectedActions)
    })

    it('Should call login with facebook Success', () => {
        const data = 'userTest'
        const expectedAction = {
            type: LOGIN_FACEBOOK_SUCCESS,
            data
        }
        expect(loginFacebookSuccess(data)).toEqual(expectedAction)
    })
})

describe('Test signup with facebook action', () => {
    it('Should call signup facebook action', () => {
        const user = 'abcxyz'
        const expectedActions = {
            type: SIGN_UP_FACEBOOK,
            user
        }
        expect(signUpFacebook(user)).toEqual(expectedActions)
    })

    it('Should call signup with facebook Success', () => {
        const expectedAction = {
            type: SIGN_UP_FACEBOOK_SUCCESS,
        }
        expect(signUpFacebookSuccess()).toEqual(expectedAction)
    })

    it('Should call signup with facebook error', () => {
        const error = 'error'
        const expectedAction = {
            type: SIGN_UP_FACEBOOK_ERROR,
            error
        }
        expect(signUpFacebookError(error)).toEqual(expectedAction)
    })
})