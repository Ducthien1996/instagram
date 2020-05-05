import {createSelector } from 'reselect'

const profileUserPostGlobalState = state => state.profileUserReducer

export const getPostCountProfile = createSelector(profileUserPostGlobalState,profileUserReducer => profileUserReducer.posts)
