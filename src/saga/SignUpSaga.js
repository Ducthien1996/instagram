import {call, put, takeLatest} from 'redux-saga/effects';
import {signUp} from '../apis/SignUpApi'
import {SIGN_UP_REQUESTED} from "../constants"
import {signUpFailed, signUpSuccess} from "../actions/index"

export function* workSignUpSaga(action) {
    try {
        const result = yield call(signUp, action.user)
        const {status, response} = result
        if (status === 200) {
            const token = result.data.token
            const user = result.data.user
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('currentUser', JSON.stringify(user))
            yield put(signUpSuccess(token))
            return
        }
        if (response) {
            switch (response.status) {
                case 409:
                    const error = response.data.message
                    yield put(signUpFailed(error))
                    break;
                case 500:
                    break
                default:
                    break
            }
        }
    } catch (err) {
    }
}

export function* watchSignUpSaga() {
    yield takeLatest(SIGN_UP_REQUESTED, workSignUpSaga)
}
