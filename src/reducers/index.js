import {combineReducers} from 'redux'
import signInReducer from '../reducers/signInReducer'
import resetPasswordReducer from './resetPasswordReducer'
import {reducer as formReducer} from 'redux-form'
import {signUpReducer} from '../reducers/signUpReducer'
import {uploadPostReducer } from '../reducers/uploadPostReducer'
import getPostsReducer from '../reducers/getPostsReducer'
import loginFacebookReducer from './loginFacebookReducer'
import signUpFacebookReducer from './signUpFacebookReducer'
import getPostDetailReducer from './getPostDetailReducer'
import commentReducer from './commentReducer'
import {getPostUserReducer} from "./getPostUserReducer"

import profileUserReducer from './profileUserReducer'
export default combineReducers({
    signInReducer,
    resetPasswordReducer,
    getPostsReducer,
    signUp: signUpReducer,
    form: formReducer,
    loginFacebookReducer,
    signUpFacebookReducer,
    uploadPost: uploadPostReducer,
    getPostDetailReducer,
    commentReducer,
    profileUserReducer,
    getPostUserReducer,
})
