import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _isBoolean from 'lodash/isBoolean'
import { Redirect } from 'react-router-dom'
import '../../css/font-awesome.css'
import '../../css/style.css'
import '../../css/error.css'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import { validateUserNameOrEmail } from '../../commons/validation';
import { resetPassword } from '../../actions';
import { getErrorsResetSelector, getIsResetSuccessSelector, getisDisableSelector } from '../../selectors/resetPasswordSelector';

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            username_email: '',
            errorsUserName: [],
            showingAlert: false,
            isCheckUsername: false,
            isCheckSubmit: false,
        }
    }

    renderErrors = (event) => {
        if (event.target.name === 'username_email') {
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
        const data = {
            username: this.state.username_email,
        }
        setTimeout(() => {
            this.setState({
                showingAlert: false,
            });
        }, 3000)
        const { isCheckUsername } = this.state
        if (isCheckUsername) {
            this.props.dispatchResetPassword(data);
        }
    }

    render() {
        const { errorsUserName, isCheckUsername } = this.state
        const { error, isResetSuccess, isDisable } = this.props
        return (
            <div className="wrap">
                <Header />
                <div className="content">
                    <div className="form form-forgot-pw">
                        <p className="center"><img src="images/icon-lock.png" alt="" /></p>
                        <h3 className="center">Trouble Logging In?</h3>
                        <p className="center">Enter your username or email and we'll send you a link to get back into account.</p>
                        <form id="form_forgot_pw" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="Email or username"
                                name="username_email"
                                id="fpw_email_fb"
                                className="input-text"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                            <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                {errorsUserName[0]}
                            </div>
                            <button
                                disabled={(!isCheckUsername) || isDisable ? true : false}
                                type="submit"
                                name="fpw-submit-fb"
                                id="fpw_submit"
                                className="btn btn-full">Submit
                            </button>
                            {
                                isResetSuccess ? <Redirect to="/reset-password-success" /> : null
                            }
                        </form>
                        <div className="label-break">
                            <span>or</span>
                        </div>
                    </div>
                    <div className="sign-up">
                        <p><Link to="/signup">Creat New Account</Link></p>
                    </div>
                    <div className="box-back">
                        <Link to="/signin">Back to log in</Link>
                    </div>
                </div>
                <div className={`message  message-error ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                    {
                        (_isBoolean(isResetSuccess) && !isResetSuccess && error !== null) ? <p>{error}</p> : ''
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: getErrorsResetSelector(state),
        isResetSuccess: getIsResetSuccessSelector(state),
        isDisable: getisDisableSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchResetPassword: (data) => {
            dispatch(resetPassword(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)