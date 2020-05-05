import React from 'react';
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import SignUp from '../../containers/SignUp/SignUp'
import store from '../../store/index'
import {BrowserRouter} from "react-router-dom"
import {signUpRequested} from "../../actions"
import {mapDispatchToProps} from "../../containers/SignUp/SignUp"
import {validate} from "../../containers/SignUp/SignUp"


describe('<SignUp />', () => {
    let storeConfigure;
    beforeAll(() => {
        storeConfigure = store
    });
    it('should render its heading', () => {
        const isSignUpSuccess = false
        const error = 'snfesfknef'
        const isDisable = false
        const {
            container: {firstChild},
        } = render(
            <Provider store={storeConfigure}>
                <BrowserRouter>
                    <SignUp isSignUpSuccess={isSignUpSuccess} error={error} isDisable={isDisable} />
                </BrowserRouter>
            </Provider>
        );
        expect(firstChild).toMatchSnapshot();
    });
    describe('onSubmit', () => {
        it('should be injected', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            expect(result.dispatchSignUp).toBeDefined();
        });
    })
    it('should dispatch sign up when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const user = 'skfjnse'
        result.dispatchSignUp(user)
        expect(dispatch).toHaveBeenCalledWith(signUpRequested(user));
    });
})
describe('Test validation ', () => {

    it('should test validate fullname required', () => {
        const error = {
            fullname: ' '
        }
        expect(validate(error.fullname).fullname).toEqual('Required')
    })
});
describe('Test validate user name', () => {

    it('should test validate username required', () => {
        const error = {
            username: ' '
        }
        expect(validate(error.username).username).toEqual('Required')
    })
});
describe('Test validate email', () => {
    it('should test validate email required', () => {
        const error = {
            email: ' '
        }
        expect(validate(error.email).email).toEqual('Required')
    })
});
describe('Test validate password', () => {
    it('should test validate password required', () => {
        const error = {
            password: ' '
        }
        expect(validate(error.password).password).toEqual('Required')
    })
});
describe('Test validate confirm password', () => {
    it('should test validate confirm password required', () => {
        const error = {
            confirmPassword: ' '
        }
        expect(validate(error.confirmPassword).confirmPassword).toEqual('Required')
    })
})


