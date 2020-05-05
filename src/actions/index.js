import {
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    ADD_PASSWORD_RESET,
    ADD_PASSWORD_RESET_ERROR,
    ADD_PASSWORD_RESET_SUCCESS,
    SAVE_TOKEN,
    SIGN_UP_FAILED,
    SIGN_UP_REQUESTED,
    SIGN_UP_SUCCESSED,
    UPLOAD_IMAGE,
    UPLOAD_POST_REQUESTED,
    UPLOAD_POST_SUCCESS,
    GET_POST,
    GET_POST_SUCCES,
    GET_POST_ERROR,
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_MORE_POST,
    GET_MORE_POST_ERROR,
    GET_MORE_POST_SUCCESS,
    LOGIN_FACEBOOK,
    LOGIN_FACEBOOK_SUCCESS,
    SIGN_UP_FACEBOOK,
    SIGN_UP_FACEBOOK_SUCCESS,
    SIGN_UP_FACEBOOK_ERROR,
    PROFILE_USER_POST_REQUESTED,
    PROFILE_USER_POST_SUCCESS,
    PROFILE_USER_POST_FAILED,
    GET_POST_USER_REQUESTED,
    GET_POST_USER_SUCCESS,
    GET_POST_USER_FAILED,
    LIKE,
    LIKE_SUCCESS,
    LIKE_ERROR,
    GET_POST_DETAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_ERROR,
    GET_MORE_COMMENT,
    GET_MORE_COMMENT_SUCCESS,
    GET_MORE_COMMENT_ERROR,
    ADD_COMMENT,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
    GET_MORE_POST_USER_REQUESTED,
    GET_MORE_POST_USER_SUCCESS,
    GET_MORE_POST_USER_FAILED,
    UPLOAD_POST_FAILED,
} from '../constants/index'

export const signUpRequested = (user) => {
    return {
        type: SIGN_UP_REQUESTED,
        user
    }
}

export const signUpSuccess = (token) => {
    return {
        type: SIGN_UP_SUCCESSED,
        token
    }
}

export const signUpFailed = (error) => {
    return {
        type: SIGN_UP_FAILED,
        error
    }
}
export const signIn = user => {
    return {
        type: SIGN_IN,
        user
    }
}

export const signInSuccess = user => {
    return {
        type: SIGN_IN_SUCCESS,
        user
    }
}

export const signInError = error => {
    return {
        type: SIGN_IN_ERROR,
        error
    }
}

export const resetPassword = data => {
    return {
        type: RESET_PASSWORD,
        data,
    }
}

export const resetPasswordSuccess = () => {
    return {
        type: RESET_PASSWORD_SUCCESS,
    }
}

export const resetPassWordError = error => {
    return {
        type: RESET_PASSWORD_ERROR,
        error,
    }
}

export const addPasswordReset = (data) => {
    return {
        type: ADD_PASSWORD_RESET,
        data
    }
}

export const addPasswordResetSuccess = () => {
    return {
        type: ADD_PASSWORD_RESET_SUCCESS,
    }
}

export const addPasswordResetError = () => {
    return {
        type: ADD_PASSWORD_RESET_ERROR,
    }
}
export const saveToken = (token) => {
    return {
        type: SAVE_TOKEN,
        token,
    }
}
export const uploadImage = data => {
    return {
        type: UPLOAD_IMAGE,
        data
    }
}
export const uploadPostRequested = data => {
    return {
        type: UPLOAD_POST_REQUESTED,
        data
    }
}
export const uploadPostSuccess = data => {
    return {
        type: UPLOAD_POST_SUCCESS,
        data
    }
}
export const uploadPostFailed = error => {
    return {
        type: UPLOAD_POST_FAILED,
        error
    }
}


export const getPost = () => {
    return {
        type: GET_POST
    }
}

export const getPostSuccess = (data) => {
    return {
        type: GET_POST_SUCCES,
        data
    }
}

export const getPostError = (error) => {
    return {
        type: GET_POST_ERROR,
        error
    }
}

export const loginFacebook = accessToken => {
    return {
        type: LOGIN_FACEBOOK,
        accessToken
    }
}

export const loginFacebookSuccess = (data) => {
    return {
        type: LOGIN_FACEBOOK_SUCCESS,
        data
    }
}

export const getComment = (postId) => {
    return {
        type: GET_COMMENT,
        postId
    }
}

export const getCommentSuccess = (comments, totalPage) => {
    return {
        type:GET_COMMENT_SUCCESS,
        comments,
        totalPage
    }
}

export const getMorePosts = (currentPage) => {
    return {
        type: GET_MORE_POST,
        currentPage
    }
}

export const getMorePostSuccess = (posts) => {
    return {
        type: GET_MORE_POST_SUCCESS,
        posts
    }
}

export const getMorePostError = (errors) => {
    return {
        type: GET_MORE_POST_ERROR,
        errors
    }
}

export const signUpFacebook = user => {
    return {
        type: SIGN_UP_FACEBOOK,
        user
    }
}

export const signUpFacebookSuccess = () => {
    return {
        type: SIGN_UP_FACEBOOK_SUCCESS
    }
}

export const signUpFacebookError = (error) => {
    return {
        type: SIGN_UP_FACEBOOK_ERROR,
        error
    }
}

export const likePost =  (postId, userId) => {
    return {
        type : LIKE,
        postId,
        userId
    }
}

export const likePostSuccess = (isLiked) => {
    return {
        type : LIKE_SUCCESS,
        isLiked
    }
}

export const likePostError = (errors) => {
    return {
        type : LIKE_ERROR,
        errors
    }
}
export const getPostsDetail = (postId) => {
    return {
        type: GET_POST_DETAIL,
        postId
    }
}

export const getPostsDetailSuccess = (data) => {
    return {
        type: GET_POST_DETAIL_SUCCESS,
        data
    }
}

export const getPostsDetailError = (error) => {
    return {
        type: GET_POST_DETAIL_ERROR,
        error
    }
}

export const getMoreComment = (postId, currentPage) => {
    return {
        type: GET_MORE_COMMENT,
        postId,
        currentPage,
    }
}

export const getMoreCommentSuccess = (comments) => {
    return {
        type : GET_MORE_COMMENT_SUCCESS,
        comments
    }
}

export const getMoreCommentError = (errors) => {
    return {
        type : GET_MORE_COMMENT_ERROR,
        errors
    }
}

export const addComment = (data, postId) => {
    return {
        type: ADD_COMMENT,
        data,
        postId
    }
}

export const addCommentSuccess = (comments) => {
    return {
        type: ADD_COMMENT_SUCCESS,
        comments
    }
}

export const addCommentError = (errors) => {
    return {
        type: ADD_COMMENT_ERROR,
        errors
    }
}


export const profileUserPostRequested = () => {
    return {
        type: PROFILE_USER_POST_REQUESTED
    }
}

export const profileUserPostSuccess = posts => {
    return {
        type: PROFILE_USER_POST_SUCCESS,
        posts
    }
}

export const profileUserPostError = errors => {
    return {
        type: PROFILE_USER_POST_FAILED,
        errors
    }
}
export const getPostUserRequested = () => {
    return {
        type: GET_POST_USER_REQUESTED
    }
}
export const getPostUserSuccess = posts => {
    return {
        type: GET_POST_USER_SUCCESS,
        posts
    }
}
export const getPostUserFailed = errors => {
    return {
        type: GET_POST_USER_FAILED,
        errors
    }
}
export const getMorePostUserRequested = (currentPage) => {
    return {
        type: GET_MORE_POST_USER_REQUESTED,
        currentPage
    }
}
export const getMorePostUserSuccess = posts => {
    return {
        type: GET_MORE_POST_USER_SUCCESS,
        posts
    }
}
export const getMorePostUserFailes = errors => {
    return {
        type: GET_MORE_POST_USER_FAILED,
        errors
    }
}
