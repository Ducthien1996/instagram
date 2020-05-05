import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import SignInForm from '../../containers/SignInForm/SignInForm'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const signInInitialState = {
    user: {},
    isSignInSuccess: '',
    error: '',
    isDisable: false,
}
const user = {
    id: 1,
    createdAt: '2019-07-10T06:30:02.283355',
    updatedAt: '2019-07-10T06:30:02.283355',
    username: 'hoainv',
    fullname: 'Nguyen Van Hoai',
    email: 'hoainv@relipasoft.com',
    avatar: 'https://i.pinimg.com/originals/b3/22/b0/b322b0d1d943e252b4f0bcdd2b200534.jpg'
}
const mockProps = {
    isSignInSuccess: true,
    error: {},
    user: user,
}
describe('<SignInForm />', () => {
    let storeConfig;
    let signInContainer = null
    beforeAll(() => {
        storeConfig = mockStore(signInInitialState)
        signInContainer = mount(
            <Provider store={storeConfig}>
                <BrowserRouter>
                    <div>
                        <SignInForm {...mockProps} />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    })
    expect(signInContainer).toMatchSnapshot();
})
