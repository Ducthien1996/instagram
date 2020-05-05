import { createSelector } from 'reselect'

export const signInGlobaleState = state => {
    return state.signInReducer
}
export const getIsSignInSuccessSelector = 
    createSelector(
        signInGlobaleState,
        signInReducer => signInReducer.isSignInSuccess
    )

export const getErrorsSignInSelector =
    createSelector(
        signInGlobaleState,
        signInReducer => signInReducer.error
    )

export const getUserSignInselector =
    createSelector(
        signInGlobaleState,
        signInReducer => signInReducer.user
    )
    
export const getIsDisableSelector = 
    createSelector(
        signInGlobaleState,
        signInReducer => signInReducer.isDisable
    )