import {createSelector } from 'reselect';

const signUpGlobalState = state => state.signUp

export const getIsSignUpSuccess = createSelector(signUpGlobalState,signUp => signUp.isSignUpSuccess)
export const getError = createSelector(signUpGlobalState, signUp => signUp.error)
export const getIsDisable = createSelector(signUpGlobalState, signUp => signUp.isDisable)
