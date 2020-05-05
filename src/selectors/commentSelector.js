import { createSelector } from 'reselect'
const commentsGlobaleState = state => state.commentReducer

export const getCommentsSelector = createSelector(commentsGlobaleState, commentReducer => commentReducer.comments)
export const getCurrentPageSelector = createSelector(commentsGlobaleState, commentReducer =>commentReducer.currentPage)
export const getTotalPageSelector =  createSelector(commentsGlobaleState, commentReducer => commentReducer.totalPage)
