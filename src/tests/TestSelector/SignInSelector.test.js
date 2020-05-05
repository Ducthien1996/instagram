import {
    signInGlobaleState,
    getUserSignInselector,
    getErrorsSignInSelector,
    getIsSignInSuccessSelector,
} from '../../selectors/signInSelector'

describe('Test SignIn Selector', () => {
    it('should select signInGlobaleState ', () => {
        const signInState = {}
        const mockedState = {
            signInReducer: signInState,
        }
        expect(signInGlobaleState(mockedState)).toEqual(signInState)
    })

    it('should select getUserSignInselector ', () => {
        const userSelector = getUserSignInselector
        const user = 'test'
        const mockedState = {
            signInReducer: {
                user : 'test'
            }
        };
        expect(userSelector(mockedState)).toEqual(user)
    })

    it('should select getErrorsSignInSelector', () => {
        const errorSelector = getErrorsSignInSelector
        const error = 'error'
        const mockedState = {
            signInReducer: {
                error : 'error'
            }
        }
        expect(errorSelector(mockedState)).toEqual(error)
    })

    it('should select getIsSignInSuccessSelector', () => {
        const isSignInSuccessSelector = getIsSignInSuccessSelector
        const isSignInSuccess = true
        const mockedState = {
            signInReducer: {
                isSignInSuccess : true
            }
        }
        expect(isSignInSuccessSelector(mockedState)).toEqual(isSignInSuccess)
    })
})
