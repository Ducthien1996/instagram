import {
    SIGN_UP_FACEBOOK
} from '../constants/index'
import {
    signUpFacebookSuccess,
    signUpFacebookError
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'
import { signUpFacebookApi } from '../apis/SignUpFacebook'

export function* workSignUpFacebookSaga(action) {
    try {
        const result = yield call(signUpFacebookApi, action.user)
        if (result.isAxiosError) {
            const error = result.response.data.message
            yield put(signUpFacebookError(error))
        } else {
            const token = result.data.token
            const user = result.data.user
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('currentUser', JSON.stringify(user))
            yield put(signUpFacebookSuccess(user))
        }
    } catch (errors) {
    }
}

export default function* watchSignUpFacebookSaga() {
    yield takeLatest(SIGN_UP_FACEBOOK, workSignUpFacebookSaga)
}
