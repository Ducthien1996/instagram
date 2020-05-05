import {
    GET_COMMENT
} from '../constants/index'
import {
    getCommentSuccess,
} from '../actions/index'
import {
    getCommentsApi
} from '../apis/GetCommentApi'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workGetCommentSaga(action) {
    try {
        const response = yield call(getCommentsApi, action.postId)
        if (response.isAxiosError) {
        } else {
            yield put(getCommentSuccess(response.data.comments,response.data.totalPage))
        }
    } catch (err) {
    }
}

export default function* watchGetCommentSaga() {
    yield takeLatest(GET_COMMENT, workGetCommentSaga)
}