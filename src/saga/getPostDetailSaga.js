import {
    GET_POST_DETAIL,
} from '../constants/index'
import {
    getPostsDetailError,
    getPostsDetailSuccess,
} from '../actions/index'
import { call, put, takeLatest } from 'redux-saga/effects'
import { GetPostDetailApi } from '../apis/GetPostDetailApi';

export function* workGetPostsDetailSaga(action) {
    try {
        const result = yield call(GetPostDetailApi, action.postId)
            if (result.isAxiosError) {
                yield put(getPostsDetailError())
            } else {
                yield put(getPostsDetailSuccess(result.data))
            }
    } catch (errors) {
    }
}

export default function* watchGetPostsDetailSaga() {
    yield takeLatest(GET_POST_DETAIL, workGetPostsDetailSaga)
}

