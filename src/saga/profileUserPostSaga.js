import {
    PROFILE_USER_POST_REQUESTED,
} from '../constants/index'
import {getPostProfileUserApi} from '../apis/GetPostProfileUserApi'
import {
    profileUserPostSuccess,
    profileUserPostError,
} from '../actions/index'
import {call, put, takeLatest} from 'redux-saga/effects'

export function* workProFileUserPostSaga() {
    try {
        const result = yield call(getPostProfileUserApi)
        if (result.isAxiosError) {
            yield put(profileUserPostError())
        } else {
            const {status} = result
            if(status === 200){
                yield put(profileUserPostSuccess(result.data))
                return
            }
        }
    } catch (errors) {
    }
}

export default function* watchPostProfileUserSaga() {
    yield takeLatest(PROFILE_USER_POST_REQUESTED, workProFileUserPostSaga)
}
