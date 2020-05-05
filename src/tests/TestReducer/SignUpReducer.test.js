import {signUpReducer} from "../../reducers/signUpReducer";
import {signUpFailed, signUpRequested, signUpSuccess} from "../../actions";


let signUpInitialState = {
    isSignUpSuccess: '',
    isDisable: false,
    error: ''
}
describe('Test sign up reducer', () => {
    it('should return initialState', () => {
        const expecResult = signUpInitialState
        expect(signUpReducer(undefined, {})).toEqual(expecResult)
    })
    it('should handle signUpRequested', () => {
        const user = {name: 'aifunsiue'}
        const expecResult = {
            ...signUpInitialState,
            isDisable: true,
            error: null
        }
        expect(signUpReducer(signUpInitialState, signUpRequested(user))).toEqual(expecResult)
    })
    it('should handle signUpSuccess', () => {
        const token = 'sijefe'
        const expecResult = {
            ...signUpInitialState,
            token: token,
            isDisable: false,
            error: '',
            isSignUpSuccess: true
        }
        expect(signUpReducer(signUpInitialState, signUpSuccess(token))).toEqual(expecResult)
    })
    it('should handle signUpFailed', () => {
        const error = 'sfesfsef'
        const expectResult = {
            ...signUpInitialState,
            error : error,
            isDisable: false,
            isSignUpSuccess: false
        }
        expect(signUpReducer(signUpInitialState, signUpFailed(error))).toEqual(expectResult)
    })
})
