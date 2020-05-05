import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './store/index'
import SignInForm from './containers/SignInForm/SignInForm'
import ForgotPassword from './containers/ResetPassword/ForgotPassword'
import Resetpassword from './containers/ResetPassword/Resetpassword'
import ResetPasswordSuccess from './containers/ResetPassword/ResetPasswordSuccess'
import LoginFacebook from './containers/LoginFacebook/LoginFacebook'
import SignUp from './containers/SignUp/SignUp'
import Home from './containers/HomePage/Home'
import PrivateRoute from './util/PrivateRoute'
import ProfileUser from './containers/ProfileUser/ProfileUser'
import UploadImage from './containers/UploadPost/UploadImage'
import UploadCaption from './containers/UploadPost/UploadCaption'
import PostDetail from './containers/PostDetail/PostDetail'
import PrivateRouteFb from './util/PrivateRouteFb';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/signup" exact component={SignUp} />
                            <Route path="/signin" exact component={SignInForm} />
                            <Route path="/reset-password" exact component={ForgotPassword} />
                            <Route path="/reset-password-success" exact component={ResetPasswordSuccess} />
                            <Route path="/reset-password/:token" exact component={Resetpassword} />
                            <PrivateRoute path="/" exact component={Home} />
                            <PrivateRoute path="/detail-post/:postId" exact component={PostDetail} />
                            <PrivateRouteFb path="/login-facebook" exact component={LoginFacebook} />
                            <Route path="/profile-user" exact component={ProfileUser} />
                            <Route path="/upload" exact component={UploadImage} />
                            <Route path="/upload-caption" exact component={UploadCaption} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
