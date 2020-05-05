import { createSelector } from 'reselect'

export const getPostsGlobaleState = state => {
    return state.getPostsReducer
}

export const getPostsSelector =
    createSelector(
        getPostsGlobaleState,
        getPostsReducer => getPostsReducer.posts
    )

export const isFetchingSelector =
    createSelector(
        getPostsGlobaleState,
        getPostsReducer => getPostsReducer.isFetching
    )

export const currentPageSelector =
    createSelector(
        getPostsGlobaleState,
        getPostsReducer => getPostsReducer.currentPage
    )

export const totalPageSelector =
    createSelector(
        getPostsGlobaleState,
        getPostsReducer => getPostsReducer.totalPage
    )

export const getLikeCountSelector =
    createSelector(
        getPostsGlobaleState,
        getPostsReducer => getPostsReducer.likeCount
    )