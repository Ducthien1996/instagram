import {
    loginFacebook,
    loginFacebookSuccess
} from '../../actions/index'

import loginFacebookReducer from '../../reducers/loginFacebookReducer'

let loginFacebookInitialState = {
    data: '',
    isSignUpFb: '',
}

describe('Test LognIn Facebook reducer', () => {
    it('Should return initialState', () => {
        const expectResult = loginFacebookInitialState
        expect(loginFacebookReducer(undefined, {})).toEqual(expectResult)
    })

    it('Should handle Login Facebook', () => {
        const accessToken = 'abc'
        const expectResult = {
            ...loginFacebookInitialState,
            isSignUpFb: false
        }
        expect(loginFacebookReducer(loginFacebookInitialState, loginFacebook(accessToken))).toEqual(expectResult)
    })

    it('Should handle LoginIn Facebook Success', () => {
        const data = 'test'
        const expectResult = {
            ...loginFacebookInitialState,
            data: 'test',
            isSignUpFb: true
        }
        expect(loginFacebookReducer(loginFacebookInitialState, loginFacebookSuccess(data))).toEqual(expectResult)
    })
})