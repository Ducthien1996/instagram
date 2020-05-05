import {
    PROFILE_USER_POST_REQUESTED,
} from '../constants/index'
import {getPostUserApi} from '../apis/GetPostProfileUserApi'
import {
    getPostUserFailed,
    getPostUserSuccess,
} from '../actions/index'
import {call, put, takeLatest} from 'redux-saga/effects'

export function* workGetPostUserSaga() {
    try {
        const result = yield call(getPostUserApi)
        if (result.isAxiosError) {
            yield put(getPostUserFailed())
        } else {
            const {status} = result
            if (status === 200) {
                yield put(getPostUserSuccess(result.data))
                return
            }
        }
    } catch (errors) {
    }
}

export default function* watchGetPostUserSaga() {
    yield takeLatest(PROFILE_USER_POST_REQUESTED, workGetPostUserSaga)
}
