import { createSelector } from 'reselect'

export const logInFacebookGlobaleState = state => {
    return state.loginFacebookReducers
}

export const getDataSelector =
    createSelector(
        logInFacebookGlobaleState,
        loginFacebookReducer => loginFacebookReducer.data
    )

export const getIsSignUpFbSelector =
    createSelector(
        logInFacebookGlobaleState,
        loginFacebookReducer => loginFacebookReducer.isSignUpFb
    )