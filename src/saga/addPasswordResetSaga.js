import {
    ADD_PASSWORD_RESET,
} from '../constants/index'
import { AddPasswordResetApi} from '../apis/AddPasswordReset'
import {
    addPasswordResetError,
    addPasswordResetSuccess,
} from '../actions/index'
import { call, put, takeLatest, select } from 'redux-saga/effects'
import { getTokenSelector } from '../selectors/resetPasswordSelector'
export function* workAddPasswordResetSaga(action) {
    try {
        const token = yield  select (getTokenSelector)
        const result = yield call(AddPasswordResetApi, token, action.data)
        if (result.isAxiosError) {
            const error = result.response.data.message
            yield put(addPasswordResetError(error))
        } else {
            yield put(addPasswordResetSuccess())
        }
    } catch (errors) {
    }
}

export default function* watchAddPasswordResetSaga() {
    yield takeLatest(ADD_PASSWORD_RESET, workAddPasswordResetSaga)
}

