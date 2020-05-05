import {createSelector} from 'reselect'

const getPostUserDetailGlobalState = state => state.getPostUserReducer

export const getPostUserSelector = createSelector(getPostUserDetailGlobalState, getPostUserReducer => getPostUserReducer.posts)
export const getTotalPageSelector = createSelector(getPostUserDetailGlobalState, getPostUserReducer => getPostUserReducer.totalPage)
export const getCurrentPageSelector = createSelector(getPostUserDetailGlobalState, getPostUserReducer => getPostUserReducer.currentPage)
