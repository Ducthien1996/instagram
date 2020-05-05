import { createSelector } from 'reselect'

export const signUpFacebookGlobaleState = state => {
    return state.signUpFacebookReducer
}

export const getErrorSelector =
    createSelector(
        signUpFacebookGlobaleState,
        signUpFacebookReducer => signUpFacebookReducer.error
    )

export const getIsSignUpSuccessSelector =
    createSelector(
        signUpFacebookGlobaleState,
        signUpFacebookReducer => signUpFacebookReducer.isSignUpSuccess
    )
