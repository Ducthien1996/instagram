import {
    SIGN_IN,
} from '../constants/index'
import { signIn } from '../apis/SignInApi'
import {
    signInError,
    signInSuccess,
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workSignInSaga(action) {
    try {
        const result = yield call(signIn, action.user)
        if (result.isAxiosError) {
            const error = result.response.data.message
            yield put(signInError(error))
        } else {
            const token = result.data.token
            const user = result.data.user
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('currentUser', JSON.stringify(user))
            yield put(signInSuccess(user))
        }
    } catch (errors) {
    }
}

export default function* watchSignInSaga() {
    yield takeLatest(SIGN_IN, workSignInSaga)
}

