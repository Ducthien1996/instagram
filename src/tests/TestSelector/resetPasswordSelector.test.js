import {
    getErrorsResetSelector,
    getIsResetSuccessSelector,
    getTokenSelector,
    getisDisableSelector,
    resetGlobaleState,
} from '../../selectors/resetPasswordSelector'

describe('Test ResetPassword Selector', () => {
    it('should select resetGlobaleState ', () => {
        const resetPasswordState = {}
        const mockedState = {
            resetPasswordReducer: resetPasswordState,
        }
        expect(resetGlobaleState(mockedState)).toEqual(resetPasswordState)
    })

    it('should select getIsResetSuccessSelector ', () => {
        const isResetSelector = getIsResetSuccessSelector
        const isResetSuccess = true
        const mockedState = {
            resetPasswordReducer: {
                isResetSuccess: true
            }
        };
        expect(isResetSelector(mockedState)).toEqual(isResetSuccess)
    })

    it('should select getErrorsResetSelector', () => {
        const errorSelector = getErrorsResetSelector
        const error = 'error'
        const mockedState = {
            resetPasswordReducer: {
                error: 'error'
            }
        }
        expect(errorSelector(mockedState)).toEqual(error)
    })

    it('Should select getTokenSelector', () => {
        const tokenSelector = getTokenSelector
        const token = 'TestToken'
        const mockedState = {
            resetPasswordReducer: {
                token: 'TestToken'
            }
        }
        expect(tokenSelector(mockedState)).toEqual(token)
    })

    it('Should select getisDisableSelector', () => {
        const isDisableSelector = getisDisableSelector
        const isDisable = false
        const mockedState = {
            resetPasswordReducer: {
                isDisable : false
            }
        }
        expect(isDisableSelector(mockedState)).toEqual(isDisable)
    })
})
