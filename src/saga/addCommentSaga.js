import {
    ADD_COMMENT
} from '../constants/index'
import {
    addCommentSuccess
} from '../actions/index'
import {
    addCommentApi
} from '../apis/AddCommentApi'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* workAddCommentSaga(action) {
    try {
        const response = yield call(addCommentApi, action.data, action.postId)
        yield put(addCommentSuccess(response.data))
    } catch (err) {
        // handle error
    }
}

export default function* watchAddCommentSaga() {
    yield takeLatest(ADD_COMMENT, workAddCommentSaga)
}