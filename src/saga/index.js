import { all } from 'redux-saga/effects'
import watchSignInSaga from './signInSaga';
import watchResetPasswordSaga from './resetPasswordSaga';
import watchAddPasswordResetSaga from './addPasswordResetSaga';
import {watchSignUpSaga} from './SignUpSaga'
import watchUploadPostSaga from './uploadPostSaga'
import watchGetPostSaga from './getPostSaga'
import watchGetMorePostSaga from './getMorePostsSaga'
import watchLoginFacebookSaga from './loginFacebookSaga'
import watchSignUpFacebookSaga from './SignUpFacebookSaga'
import watchLikePostSaga from './likePostSaga'
import watchGetPostsDetailSaga from './getPostDetailSaga'
import watchGetCommentSaga from './getCommentSaga'
import watchAddCommentSaga from './addCommentSaga'
import watchGetMoreCommentSaga from './getMoreCommentSaga';
import watchPostProfileUserSaga from './profileUserPostSaga'
import watchGetPostUserSaga from './getPostUserSaga'
import watchGetMorePostUserSaga from "./getMorePostUser";

export default function* rootSaga() {
   yield all([
       watchSignInSaga(),
       watchResetPasswordSaga(),
       watchAddPasswordResetSaga(),
       watchSignUpSaga(),
       watchUploadPostSaga(),
       watchGetPostSaga(),
       watchGetMorePostSaga(),
       watchLoginFacebookSaga(),
       watchSignUpFacebookSaga(),
       watchLikePostSaga(),
       watchGetPostsDetailSaga(),
       watchGetCommentSaga(),
       watchAddCommentSaga(),
       watchGetMoreCommentSaga(),
       watchPostProfileUserSaga(),
       watchGetPostUserSaga(),
       watchGetMorePostUserSaga(),
   ])
}
