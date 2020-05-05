import React, { Component } from 'react'
import _get from 'lodash/get'
import Header from '../../components/Header/Header'
import { validatePassWord, validateConfirmPassword } from '../../commons/validation';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addPasswordReset, saveToken } from '../../actions';
import { getIsResetSuccessSelector } from '../../selectors/resetPasswordSelector';

class Resetpassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirm_password: '',
            errorsPassWord: [],
            errorsConfirmPassWord: [],
            showingAlert: false,
            isCheckPassword: false,
            isCheckConfirmPassword: false,
            isCheckSubmit: false,
        }
    }
    componentDidMount() {
        const token = _get(this.props.match.params, 'token', '')
        this.props.dispacthSaveToken(token)
    }

    renderErrors = (event) => {
        if (event.target.name === 'password') {
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
        } else {
            const password = this.state.password
            const confirmPassword = event.target.value
            const resultValidateConfirmPassword = validateConfirmPassword(password, confirmPassword)
            if (resultValidateConfirmPassword.length !== 0) {
                this.setState({
                    isCheckConfirmPassword: false,
                    isCheckSubmit: false,
                    errorsConfirmPassWord: resultValidateConfirmPassword,
                })
            } else {
                this.setState({
                    isCheckConfirmPassword: true,
                    errorsConfirmPassWord: []
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
        const data = {
            newPassword: this.state.password,
        }
        setTimeout(() => {
            this.setState({
                showingAlert: false,
            });
        }, 3000)
        const { isCheckPassword } = this.state
        if (isCheckPassword) {
            this.props.dispatchAddPasswordReset(data);
        }
    }

    render() {
        const { errorsPassWord, errorsConfirmPassWord, isCheckPassword, isCheckConfirmPassword } = this.state
        const { isResetSuccess } = this.props
        return (
            <div className="wrap">
                <Header />
                <div className="content">
                    <div className="form form-reset-pw">
                        <form id="form_reset_pw" onSubmit={this.handleSubmit}>
                            <label>New password</label>
                            <input
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                type="password"
                                placeholder="new password"
                                name="password"
                                id="reset_pw"
                                className="input-text"
                            />
                            <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                {errorsPassWord[0]}
                            </div>
                            <label>Confirm password</label>
                            <input
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                type="password"
                                placeholder="confirm password"
                                name="confirm_password"
                                id="reset_pw_cf"
                                className="input-text"
                            />
                            <div className="show-error" style={{ color: "red", textAlign: "left" }} >
                                {errorsConfirmPassWord[0]}
                            </div>
                            <button
                                disabled={(isCheckPassword && isCheckConfirmPassword) ? false : true}
                                type="submit"
                                name="reset-pw-submit"
                                id="reset_pw_submit"
                                className="btn btn-full"
                            >Reset password
                            </button>
                            {
                                isResetSuccess ? <Redirect to="/signin" /> : null
                            }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isResetSuccess: getIsResetSuccessSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddPasswordReset: (data) => {
            dispatch(addPasswordReset(data))
        },
        dispacthSaveToken: token => dispatch(saveToken(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetpassword)