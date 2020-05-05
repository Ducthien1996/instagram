import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, loginFacebook } from '../../actions/index'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import _isBoolean from 'lodash/isBoolean'
import _isEmpty from 'lodash/isEmpty'
import '../../css/font-awesome.css'
import '../../css/style.css'
import '../../css/error.css'
import { getIsSignInSuccessSelector, getErrorsSignInSelector, getUserSignInselector, getIsDisableSelector } from '../../selectors/signInSelector'
import { validateUserNameOrEmail, validatePassWord } from '../../commons/validation'
import Header from '../../components/Header/Header'
import FacebookLogin from 'react-facebook-login'
import { getDataSelector, getIsSignUpFbSelector } from '../../selectors/loginFacebookSelector'

class SignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errorsUserName: [],
            errorsPassWord: [],
            showingAlert: false,
            isCheckUsername: false,
            isCheckPassword: false,
            isCheckSubmit: false,
            isLoggedIn: false,
            accessToken: '',
        }
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            accessToken: response.accessToken,
        })
        if (this.state.isLoggedIn === true) {
            const accessToken = this.state.accessToken
            this.props.dispatchLoginFacebook({ accessToken })
        }
    }

    renderErrors = (event) => {
        if (event.target.name === 'username') {
            const username = event.target.value
            const resultValidateUsername = validateUserNameOrEmail(username)
            if (resultValidateUsername.length !== 0) {
                this.setState({
                    isCheckUsername: false,
                    isCheckSubmit: false,
                    errorsUserName: resultValidateUsername
                })
            } else {
                this.setState({
                    isCheckUsername: true,
                    errorsUserName: [],
                })
            }
        } else {
            const password = event.target.value
            const resultValidatePassword = validatePassWord(password)
            if (resultValidatePassword.length !== 0) {
                this.setState({
                    isCheckPassword: false,
                    isCheckSubmit: false,
                    errorsPassWord: resultValidatePassword,
                })
            } else {
                this.setState({
                    isCheckPassword: true,
                    errorsPassWord: []
                })
            }
        }
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
        this.renderErrors(event)
    }

    handleBlur = event => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
        this.renderErrors(event)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            isCheckSubmit: true,
            showingAlert: true
        })
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        const { isCheckPassword, isCheckUsername } = this.state
        if (isCheckPassword && isCheckUsername) {
            this.props.dispatchSignIn(user);
        }
        setTimeout(() => {
            this.setState({
                showingAlert: false,
            });
        }, 3000)
    }

    render() {
        const { errorsUserName, errorsPassWord, isCheckPassword, isCheckUsername, isLoggedIn } = this.state
        const { isSignInSuccess, error, isDisable, isSignUpFb, data } = this.props
        const { token } = data
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="wrap">
                    <Header />
                    <div className="content">
                        <div className="form form-login">
                            <form id="form_login">
                                <input
                                    onBlur={this.handleBlur}
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Username or Email"
                                    name="username"
                                    id="login_user&quot;"
                                    className="input-text"
                                    value={this.state.username}
                                />
                                <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                    {errorsUserName[0]}
                                </div>
                                <input
                                    onBlur={this.handleBlur}
                                    onChange={this.handleChange}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    id="login_pass"
                                    className="input-text"
                                    value={this.state.password}
                                />
                                <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                    {errorsPassWord[0]}
                                </div>
                                <button
                                    type="submit"
                                    name="login-submit"
                                    id="login_submit"
                                    className="btn btn-full"
                                    disabled={(!isCheckPassword || !isCheckUsername) || isDisable ? true : false}
                                >
                                    Log in
                                </button>
                                {
                                    isSignInSuccess ? <Redirect to="" /> : null
                                }
                            </form>
                            <div className="label-break">
                                <span>or</span>
                            </div>
                            <div className="login-fb">
                                <p><i className="fa fa-facebook-square" aria-hidden="true" />
                                    <FacebookLogin
                                        appId="417993668921525"
                                        fields="name,email,picture"
                                        onClick={this.componentClicked}
                                        callback={this.responseFacebook}
                                        cssClass="btn-signup-fb"
                                    />
                                </p>
                            </div>
                            {
                                isSignUpFb && !_isEmpty(token) ? <Redirect to="/" /> : null
                            }
                            {
                                isSignUpFb && _isEmpty(token) && isLoggedIn ? <Redirect to="login-facebook" /> : <Redirect to="/signin" />
                            }
                            <p className="forgot-pass"><Link to="/reset-password">Forgot password?</Link></p>
                        </div>
                        <div className="sign-up">
                            <p>Don't have an account?<Link to="/signup">Sign up</Link></p>
                        </div>
                    </div>
                    <div className={`message  message-error ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                        {
                            (_isBoolean(isSignInSuccess) && !isSignInSuccess && error !== null) ? <p>{error}</p> : ''
                        }
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignInSuccess: getIsSignInSuccessSelector(state),
        error: getErrorsSignInSelector(state),
        user: getUserSignInselector(state),
        isDisable: getIsDisableSelector(state),
        data: getDataSelector(state),
        isSignUpFb: state.loginFacebookReducer.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignIn: (user) => {
            dispatch(signIn(user))
        },
        dispatchLoginFacebook: (accessToken) => dispatch(loginFacebook(accessToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)