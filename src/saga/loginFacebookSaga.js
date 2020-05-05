import {
    LOGIN_FACEBOOK
} from '../constants/index'
import {
    loginFacebookSuccess
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'
import { loginFacebookAPI } from '../apis/LoginFacebook'

export function* workLoginFacebookSaga(action) {

    try {
        const result = yield call(loginFacebookAPI, action.accessToken)
        if (result.isAxiosError) {
        } else {
            const data = result.data
            const token = data.token
            const user = data.user
            const { accessToken } = action.accessToken
            if (accessToken) {
                sessionStorage.setItem('accessToken', accessToken)
            }
            if (token) {
                sessionStorage.setItem('token', token)
            }
            if(user) {
                sessionStorage.setItem('currentUser', JSON.stringify(user))
            }
            yield put(loginFacebookSuccess(data))
        }
    } catch (errors) {
    }
}

export default function* watchLoginFacebookSaga() {
    yield takeLatest(LOGIN_FACEBOOK, workLoginFacebookSaga)
}
