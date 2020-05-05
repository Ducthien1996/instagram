import {
    signUpFacebook,
    signUpFacebookSuccess,
    signUpFacebookError,
} from '../../actions/index'

import signUpFacebookReducer from '../../reducers/signUpFacebookReducer'

let signUpFacebookInitialState = {
    user: '',
    isSignUpSuccess: '',
    error: '',
    isDisable: false,
}

describe('Test SignUp Facebook reducer', () => {
    it('Should return initialState', () => {
        const expectResult = signUpFacebookInitialState
        expect(signUpFacebookReducer(undefined, {})).toEqual(expectResult)
    })

    it('Should handle SignUp Facebook', () => {
        const user = 'userTest'
        const expectResult = {
            ...signUpFacebookInitialState,
            isDisable: true
        }
        expect(signUpFacebookReducer(signUpFacebookInitialState, signUpFacebook(user))).toEqual(expectResult)
    })
    it('Should handle SignUp Facebook Success', () => {
        const expectResult = {
            ...signUpFacebookInitialState,
            isSignUpSuccess: true,
            user: undefined,
            isDisable: false
        }
        expect(signUpFacebookReducer(signUpFacebookInitialState, signUpFacebookSuccess())).toEqual(expectResult)
    })
    it('Should handle SignUp Facebook Error', () => {
        const error = 'test'
        const expectResult = {
            ...signUpFacebookInitialState,
            isSignUpSuccess: false,
            error: error,
            isDisable: false,
        }
        expect(signUpFacebookReducer(signUpFacebookInitialState, signUpFacebookError(error))).toEqual(expectResult)
    })
})