import {
    RESET_PASSWORD,
} from '../constants/index'
import { ResetPassWordApi } from '../apis/ResetPassWord'
import {
    resetPassWordError,
    resetPasswordSuccess,
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workResetPasswordSaga(action) {
    try {
        const result = yield call(ResetPassWordApi, action.data)
        if (result.isAxiosError) {
            const error = result.response.data.message
            yield put(resetPassWordError(error))
        } else {
            yield put(resetPasswordSuccess())
        }
    } catch (errors) {
    }
}

export default function* watchResetPasswordSaga() {
    yield takeLatest(RESET_PASSWORD, workResetPasswordSaga)
}

