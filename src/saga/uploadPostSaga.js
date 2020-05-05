import {call, put, takeLatest} from 'redux-saga/effects'
import {uploadPostApi} from "../apis/UploadPostApi"
import {uploadPostFailed, uploadPostSuccess} from "../actions"
import {UPLOAD_POST_REQUESTED} from "../constants"

function* workUploadPostSaga(action) {
    try {
        const response = yield call(uploadPostApi, action.data)
        if (response.isAxiosError) {
            yield put(uploadPostFailed())
        } else {
            yield put(uploadPostSuccess(response.data))
        }
    } catch (err) {
    }
}

export default function* watchUploadPostSaga() {
    yield takeLatest(UPLOAD_POST_REQUESTED, workUploadPostSaga)
}
