import { createSelector } from 'reselect'

export const resetGlobaleState = state => {
    return state.resetPasswordReducer
}

export const getErrorsResetSelector =
    createSelector(
        resetGlobaleState,
        resetPasswordReducer => resetPasswordReducer.error
    )

export const getIsResetSuccessSelector =
    createSelector(
        resetGlobaleState,
        resetPasswordReducer => resetPasswordReducer.isResetSuccess
    )

export const getisDisableSelector =
    createSelector(
        resetGlobaleState,
        resetPasswordReducer => resetPasswordReducer.isDisable
    )
   
export const getTokenSelector =
    createSelector(
        resetGlobaleState,
        resetPasswordReducer => resetPasswordReducer.token,
    )