import {
    signUpFacebookGlobaleState,
    getErrorSelector,
    getIsSignUpSuccessSelector,
} from '../../selectors/signUpFacebookSelector'

describe('Test SignUpFacebook Selector', () => {
    it('should select signUpFacebookGlobaleState ', () => {
        const signUpFbState = {}
        const mockedState = {
            signUpFacebookReducer: signUpFbState,
        }
        expect(signUpFacebookGlobaleState(mockedState)).toEqual(signUpFbState)
    })

    it('should select getErrorSelector', () => {
        const errorSelector = getErrorSelector
        const error = 'error'
        const mockedState = {
            signUpFacebookReducer: {
                error : 'error'
            }
        }
        expect(errorSelector(mockedState)).toEqual(error)
    })

    it('should select getIsSignInSuccessSelector', () => {
        const isSignUpSuccessSelector = getIsSignUpSuccessSelector
        const isSignUpSuccess = true
        const mockedState = {
            signUpFacebookReducer: {
                isSignUpSuccess : true
            }
        }
        expect(isSignUpSuccessSelector(mockedState)).toEqual(isSignUpSuccess)
    })
})
