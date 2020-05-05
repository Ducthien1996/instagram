import React, { Component } from 'react'
import '../../css/font-awesome.css'
import '../../css/style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDataSelector } from '../../selectors/loginFacebookSelector'
import { validatePassWord, validateEmail, validateFullName, validateUserName } from '../../commons/validation';
import Header from '../../components/Header/Header';
import { Redirect } from 'react-router-dom'
import _isBoolean from 'lodash/isBoolean'
import { signUpFacebook } from '../../actions';
import { getErrorSelector, getIsSignUpSuccessSelector } from '../../selectors/signUpFacebookSelector';

class LoginFacebook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: this.props.data.email,
            password: "",
            fullname: this.props.data.fullname,
            username: "",
            errorsEmail: [],
            errorsPassWord: [],
            errorsUserName: [],
            errorsFullName: [],
            showingAlert: false,
            isCheckEmail: false,
            isCheckPassword: false,
            isCheckUserName: false,
            isCheckFullName: false,
            isCheckSubmit: false,
        }
    }

    renderErrors = (event) => {
        if (event.target.name === 'email') {
            const email = event.target.value
            const resultValidateEmail = validateEmail(email)
            if (resultValidateEmail.length !== 0) {
                this.setState({
                    isCheckEmail: false,
                    isCheckSubmit: false,
                    errorsEmail: resultValidateEmail
                })
            } else {
                this.setState({
                    isCheckEmail: true,
                    errorsEmail: [],
                })
            }
        } else if (event.target.name === 'password') {
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
        } else if (event.target.name === 'fullname') {
            const fullname = event.target.value
            const resultValidateFullname = validateFullName(fullname)
            if (resultValidateFullname.length !== 0) {
                this.setState({
                    isCheckFullName: false,
                    isCheckSubmit: false,
                    errorsFullName: resultValidateFullname,
                })
            } else {
                this.setState({
                    isCheckFullName: true,
                    errorsFullName: []
                })
            }
        } else if (event.target.name === 'username') {
            const username = event.target.value
            const resultValidateUserName = validateUserName(username)
            if (resultValidateUserName.length !== 0) {
                this.setState({
                    isCheckFullName: false,
                    isCheckSubmit: false,
                    errorsUserName: resultValidateUserName,
                })
            } else {
                this.setState({
                    isCheckUserName: true,
                    errorsUserName: []
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
            showingAlert: true,
        })
        const user = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            facebookId: this.props.data.facebookId,
            avatar: this.props.data.avatar
        }
        setTimeout(() => {
            this.setState({
                showingAlert: false,
            });
        }, 3000)
        const { isCheckPassword, isCheckUserName } = this.state
        if (isCheckPassword && isCheckUserName) {
            this.props.dispatchSignUpFB(user);
        }
    }

    render() {
        const { data, error, isSignUpSuccess } = this.props
        const { avatar, email, fullname } = data
        const { errorsEmail, errorsFullName, errorsUserName, errorsPassWord, isCheckPassword, isCheckUserName } = this.state
        return (
            <div>
                <div className="wrap">
                    <Header />
                    <div className="content">
                        <div className="form form-sign-up-fb">
                            <form onSubmit={this.handleSubmit} id="form_sign_up_fb">
                                <div className="sign-up-avatar">
                                    <p><img src={avatar} alt="" /></p>
                                </div>
                                <input
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    placeholder="Email"
                                    name="email"
                                    id="signup_email_fb"
                                    defaultValue={email ? email : this.state.email}
                                />
                                <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                    {errorsEmail[0]}
                                </div>
                                <input
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    type="text"
                                    placeholder="Fullname"
                                    name="fullname"
                                    id="signup_name_fb"
                                    defaultValue={fullname ? fullname : this.state.fullname}
                                />
                                <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                    {errorsFullName[0]}
                                </div>
                                <input
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    id="signup_user_fb"
                                    value={this.state.username}
                                />
                                <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                    {errorsUserName[0]}
                                </div>
                                <input
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    id="signup_pass_fb"
                                    value={this.state.password}
                                />
                                <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                    {errorsPassWord[0]}
                                </div>
                                <button
                                    type="submit"
                                    name="signup-submit-fb"
                                    id="signup_submit_fb"
                                    className="btn btn-full"
                                    disabled={(!isCheckPassword || !isCheckUserName) ? true : false}
                                >Sign up
                                </button>
                                {
                                    isSignUpSuccess ? <Redirect to="/" /> : null
                                }
                            </form>
                        </div>
                        <div className="sign-up">
                            <p>Have a account?<Link to="signin">Log in</Link></p>
                        </div>
                        <div className={`message  message-error ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                            {
                                (_isBoolean(isSignUpSuccess) && !isSignUpSuccess) ? <p>{error}</p> : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: getDataSelector(state),
        error: getErrorSelector(state),
        isSignUpSuccess: getIsSignUpSuccessSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignUpFB: user => {
            dispatch(signUpFacebook(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook)