import {
    SIGN_UP_FAILED,
    SIGN_UP_REQUESTED,
    SIGN_UP_SUCCESSED
} from "../../constants";
import {
    signUpRequested,
    signUpSuccess,
    signUpFailed
} from "../../actions/index"

describe('test signup actions', () => {
    it('should call signUpRequested action', () => {
        const user = {
            'name': 'kybh',
            'fullname': 'buihaongky',
            'email': 'fiseu@gmail.com',
            'password': '12345678'
        }
        const expectedActions = {
            type: SIGN_UP_REQUESTED,
            user
        }
        expect(signUpRequested(user)).toEqual(expectedActions)
    })
    it('should call signUpSuccess action', () => {
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJob2FpbnYiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNTY0NTU1MzEzLCJleHAiOjE1NjUxNjAxMTN9.MnKXFQ3wWiydaprQmiHFYxTFp7KJJMlzTVJXxJvFByM"
        const expectedActions = {
            type: SIGN_UP_SUCCESSED,
            token
        }
        expect(signUpSuccess(token)).toEqual(expectedActions)
    })
    it('should call signUpFailed action', () => {
        const error = "email xxxxxxxxxxx"
        const expectedActions = {
            type: SIGN_UP_FAILED,
            error
        }
        expect(signUpFailed(error)).toEqual(expectedActions)
    })
})
