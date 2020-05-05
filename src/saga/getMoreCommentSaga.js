import {
    GET_MORE_COMMENT
} from '../constants/index'
import {
    getMoreCommentSuccess
} from '../actions/index'
import {
    getMoreCommentsApi
} from '../apis/GetCommentApi'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workGetMoreCommentSaga(action) {
    try {
        const response = yield call(getMoreCommentsApi, action.postId, action.currentPage)
        yield put(getMoreCommentSuccess(response.data.comments))
    } catch (err) {
    }
}

export default function* watchGetMoreCommentSaga() {
    yield takeLatest(GET_MORE_COMMENT, workGetMoreCommentSaga)
}
