import {
    resetPassword,
    resetPasswordSuccess,
    resetPassWordError,
    addPasswordReset,
    addPasswordResetSuccess,
    addPasswordResetError,
    saveToken,
} from '../../actions/index'

import {
    ADD_PASSWORD_RESET,
    ADD_PASSWORD_RESET_ERROR,
    ADD_PASSWORD_RESET_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    SAVE_TOKEN,
} from '../../constants/index'

describe('Test ResetPassword action', () => {
    it('Should call resetPasword action', () => {
        const data = 'dataTest'
        const expectedActions = {
            type: RESET_PASSWORD,
            data
        }
        expect(resetPassword(data)).toEqual(expectedActions)
    })

    it('Should call resetPassword success', () => {
        const expectedAction = {
            type: RESET_PASSWORD_SUCCESS
        }
        expect(resetPasswordSuccess()).toEqual(expectedAction)
    })

    it('Should call resetPasword Error', () => {
        const error = [test]
        const expectedAction = {
            type: RESET_PASSWORD_ERROR,
            error
        }
        expect(resetPassWordError(error)).toEqual(expectedAction)
    })

    it('Should call addPasswordReset', () => {
        const data = 'dataTest'
        const expectedAction = {
            type: ADD_PASSWORD_RESET,
            data
        }
        expect(addPasswordReset(data)).toEqual(expectedAction)
    })

    it('Should call addPasswordReset Success', () => {
        const expectedAction = {
            type: ADD_PASSWORD_RESET_SUCCESS,
        }
        expect(addPasswordResetSuccess()).toEqual(expectedAction)
    })

    it('Should call addPasswordReset Error', () => {
        const expectedAction = {
            type: ADD_PASSWORD_RESET_ERROR,
        }
        expect(addPasswordResetError()).toEqual(expectedAction)
    })

    it('Should call saveToken ', () => {
        const token = 'TestToken'
        const expectedAction = {
            type: SAVE_TOKEN,
            token,
        }
        expect(saveToken(token)).toEqual(expectedAction)
    })
})