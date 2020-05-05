import {
    GET_MORE_POST
} from '../constants/index'
import {
    getMorePostSuccess,
    getMorePostError
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getMorePostsApi } from '../apis/GetMorePostsApi'

export function* workGetMorePostSaga(action) {
    try {
        const result = yield call(getMorePostsApi, action.currentPage)
        if (result.isAxiosError) {
            yield put(getMorePostError())
        } else {
            yield put(getMorePostSuccess(result.data.posts))
        }
    } catch (err) {
    }
}

export default function* watchGetMorePostSaga() {
    yield takeLatest(GET_MORE_POST, workGetMorePostSaga)
}