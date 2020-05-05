import {
    signIn,
    signInError,
    signInSuccess
} from '../../actions/index'

import signInReducer from '../../reducers/signInReducer'

let signInInitialState = {
    user: '',
    isSignInSuccess: '',
    error: '',
    isDisable : false,
}

describe('Test SignIn reducer', () => {
    it('Should return initialState', () => {
        const expectResult = signInInitialState
        expect(signInReducer(undefined, {})).toEqual(expectResult)
    })

    it('Should handle signin', () => {
        const user = 'testUser'
        const expectResult = {
            ...signInInitialState,
            isDisable : true
        }
        expect(signInReducer(signInInitialState, signIn(user))).toEqual(expectResult)
    })

    it('Should handle signin success', () => {
        const user = 'user'
        const expectResult = {
            ...signInInitialState,
            isSignInSuccess: true,
            isDisable : false,
            user: user,
        }
        expect(signInReducer(signInInitialState, signInSuccess(user))).toEqual(expectResult)
    })

    it('Should handle signin errors ', () => {
        const error = "messeage"
        const expectResult = {
            ...signInInitialState,
            isSignInSuccess: false,
            isDisable : false,
            error: error,
        }
        expect(signInReducer(signInInitialState, signInError(error))).toEqual(expectResult)
    })
})