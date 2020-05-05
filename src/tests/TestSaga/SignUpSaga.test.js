import {workSignUpSaga} from "../../saga/SignUpSaga"
import {put, takeLatest} from 'redux-saga/effects'
import {signUpSuccess} from "../../actions";
import {watchSignUpSaga} from "../../saga/SignUpSaga"
import {SIGN_UP_REQUESTED} from "../../constants"

describe('Get Post after sign up', () => {

    let getSignUpGeneretor;
    let getSignUpGeneretor1;
    const action = {
        user: null
    }
    beforeEach(() => {
        getSignUpGeneretor = workSignUpSaga(action)
        getSignUpGeneretor1 = workSignUpSaga()
    });
    it('should call the workSignUpSaga action', () => {
        const selectDescriptor = getSignUpGeneretor1.next().value;
        expect(selectDescriptor).toMatchSnapshot();
    });
    it('should call signUpSuccess if sign up success', () => {
        const respone = {
            user: {

                user1: 'esfe'
            },
            token: 'sfkinsekf'
        }
        const token = 'sfjsehbf'
        const yeildFirst = getSignUpGeneretor.next().value
        const putDescriptor = getSignUpGeneretor.next(respone.token).value
        expect(putDescriptor).toEqual(put(signUpSuccess(token)))
    })
})
describe('workSignUpSaga', () => {
    const workSignUpSagaTest = watchSignUpSaga();
    it('should start task to watch for watchSignUp action', () => {
        const takeLatestDescriptor = workSignUpSagaTest.next().value;
        expect(takeLatestDescriptor).toEqual(takeLatest(SIGN_UP_REQUESTED, workSignUpSaga));
    });
});
