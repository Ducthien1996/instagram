import {
    signIn,
    signInError,
    signInSuccess
} from '../../actions/index'

import {
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS
} from '../../constants/index'

describe('Test SignIn action', () => {
    it('Should call signIn action', () => {
        const user = 'userTest'
        const expectedActions = {
            type: SIGN_IN,
            user
        }
        expect(signIn(user)).toEqual(expectedActions)
    })

    it('Should call signInSuccess', () => {
        const user = 'userTest'
        const expectedAction = {
            type: SIGN_IN_SUCCESS,
            user
        }
        expect(signInSuccess(user)).toEqual(expectedAction)
    })

    it('Should call signIn Error', () => {
        const error = [test]
        const expectedAction = {
            type: SIGN_IN_ERROR,
            error
        }
        expect(signInError(error)).toEqual(expectedAction)
    })
})