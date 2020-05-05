import {
    LIKE
} from '../constants/index'
import { getLikePostApi } from '../apis/LikePostApi'
import {
    likePostSuccess, likePostError,
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workLikePostSaga(action) {
    try {
        const result = yield call(getLikePostApi, action.postId, action.userId)
        if (result.isAxiosError) {
            yield put(likePostError())
        } else {
            yield put(likePostSuccess(result.data))
        }
    } catch (err) {
    }
}

export default function* watchLikePostSaga() {
    yield takeLatest(LIKE, workLikePostSaga)
}