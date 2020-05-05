import {
    GET_POST,
} from '../constants/index'
import { getPostApi } from '../apis/GetPostApi'
import {
    getPostSuccess,
    getPostError,
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workGetPostSaga() {
    try {
        const result = yield call(getPostApi)
        if (result.isAxiosError) {
            const error = result.response.data.message
            yield put(getPostError(error))
        } else {
            const data = result.data
            yield put(getPostSuccess(data))
        }
    } catch (errors) {
    }
}

export default function* watchGetPostSaga() {
    yield takeLatest(GET_POST, workGetPostSaga)
}

