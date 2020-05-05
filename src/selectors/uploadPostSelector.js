import {createSelector} from 'reselect'

export const upLoadPostGlobalState = state => state.uploadPost
export const isRedeirectSelector = createSelector(upLoadPostGlobalState, uploadPost => uploadPost.isRedirect)
