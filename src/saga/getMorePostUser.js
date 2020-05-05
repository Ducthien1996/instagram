import {
    GET_MORE_POST_USER_REQUESTED,
} from '../constants/index'
import {getMorePostUserApi} from '../apis/GetPostProfileUserApi'
import {
    getMorePostUserFailes,
    getMorePostUserSuccess,
} from '../actions/index'
import {call, put, takeLatest} from 'redux-saga/effects'

export function* workGetMorePostUserSaga(action) {
    try {
        const result = yield call(getMorePostUserApi,action.currentPage)
        if (result.isAxiosError) {
            yield put(getMorePostUserFailes())
        } else {
            const {status} = result
            if (status === 200) {
                yield put(getMorePostUserSuccess(result.data))
                return
            }
        }
    } catch (errors) {
    }
}

export default function* watchGetMorePostUserSaga() {
    yield takeLatest(GET_MORE_POST_USER_REQUESTED, workGetMorePostUserSaga)
}
