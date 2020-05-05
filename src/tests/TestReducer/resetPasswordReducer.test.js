import {
    resetPassword,
    resetPasswordSuccess,
    resetPassWordError,
    addPasswordReset,
    addPasswordResetSuccess,
    addPasswordResetError,
    saveToken,
} from '../../actions/index'

import resetPasswordReducer from '../../reducers/resetPasswordReducer'

let resetPasswordInitialState = {
    isResetSuccess: '',
    error: '',
    isDisable: false,
    token: '',
}

describe('Test ResetPassword reducer', () => {
    it('Should return initialState', () => {
        const expectResult = resetPasswordInitialState
        expect(resetPasswordReducer(undefined, {})).toEqual(expectResult)
    })

    it('Should handle resetPassword', () => {
        const data = 'testData'
        const expectResult = {
            ...resetPasswordInitialState,
            isDisable: true
        }
        expect(resetPasswordReducer(resetPasswordInitialState, resetPassword(data))).toEqual(expectResult)
    })

    it('Should handle resetPassword success', () => {
        const expectResult = {
            ...resetPasswordInitialState,
            isResetSuccess: true,
            isDisable: false,
        }
        expect(resetPasswordReducer(resetPasswordInitialState, resetPasswordSuccess())).toEqual(expectResult)
    })

    it('Should handle resetPassword errors ', () => {
        const error = "messeage"
        const expectResult = {
            ...resetPasswordInitialState,
            isResetSuccess: false,
            error: error,
            isDisable: false,
        }
        expect(resetPasswordReducer(resetPasswordInitialState, resetPassWordError(error))).toEqual(expectResult)
    })

    it('Should handle saveToken ', () => {
        const token = 'TestToken'
        const expectResult = {
            ...resetPasswordInitialState,
            token: token,
        }
        expect(resetPasswordReducer(resetPasswordInitialState, saveToken(token))).toEqual(expectResult)
    })

    it('Should handle add new password', () => {
        const data = {
            "newPassword": "123456"
        }
        const expectedResult = {
            ...resetPasswordInitialState,
            isDisable : true
        }
        expect(resetPasswordReducer(resetPasswordInitialState, addPasswordReset(data))).toEqual(expectedResult)
    })

    it('Should handle add new password success', () => {
        const expectedResult = {
            ...resetPasswordInitialState,
            isResetSuccess: true,
            isDisable : false,
        }
        expect(resetPasswordReducer(resetPasswordInitialState, addPasswordResetSuccess())).toEqual(expectedResult)
    })

    it('Should handle add new password error', () => {
        const expectedResult = {
            ...resetPasswordInitialState,
            isResetSuccess: false,
            error: undefined,
            isDisable : false,
        }
        expect(resetPasswordReducer(resetPasswordInitialState, addPasswordResetError())).toEqual(expectedResult)
    })
})