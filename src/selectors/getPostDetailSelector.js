import { createSelector } from 'reselect'

export const getPostDetailGlobaleState = state => {
    return state.getPostDetailReducer
}

export const getPostDetailSelector =
    createSelector(
        getPostDetailGlobaleState,
        getPostDetailReducer => getPostDetailReducer.postDetail
    )

export const getLikeCountDetailSelector =
    createSelector(
        getPostDetailGlobaleState,
        getPostDetailReducer => getPostDetailReducer.likeCount
    )
