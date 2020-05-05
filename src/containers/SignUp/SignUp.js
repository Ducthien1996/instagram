import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux"
import { signUpRequested } from "../../actions"
import { Redirect, Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import _isBoolean from 'lodash/isBoolean'
import '../../css/style.css'
import '../../css/error.css'
import '../../css/font-awesome.css'
import { getError, getIsDisable, getIsSignUpSuccess } from "../../selectors/signUpSelector"

class SignUp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showingAlert: false,
            showButton: true
        }
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div style={{ color: 'red', float: 'left', marginTop: '-20px', marginBottom: '12px' }}>{error}</div>
            );
        }
    }

    renderInput = ({ input, meta, placeholder, type, id }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <input {...input} placeholder={placeholder} type={type} id={id} style={{ marginBottom: '20px' }} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.setState({
            showingAlert: true
        })
        const user = {
            fullname: formValues.fullname,
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        }
        this.props.dispatchSignUp(user);
        setTimeout(() => {
            this.setState({
                showingAlert: false
            });
        }, 3000
        )
    }

    render() {
        const { error, isSignUpSuccess, isDisable } = this.props
        return (
            <div className="wrap">
                <div className="header">
                    <div className="logo">
                        <Link to="/">Religram</Link>
                        <p className="slogan">Heaven in your hands</p>
                    </div>
                </div>
                <div className="content">
                    <div className="form form-sign-up">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} id="form_sign_up">
                            <Field name="email" placeholder="Email" component={this.renderInput}
                                type="text" defaultValue id="signup_email" className="input-text"
                            />
                            <Field name="fullname" component={this.renderInput}
                                type="text" defaultValue placeholder="Full name" id="signup_name"
                                className="input-text"
                            />
                            <Field type="text" component={this.renderInput}
                                defaultValue placeholder="User name" name="username" id="signup_user"
                                className="input-text"
                            />
                            <Field type="password" component={this.renderInput}
                                defaultValue placeholder="Password" name="password" id="signup_pass"
                                className="input-text"
                            />
                            <Field type="password" component={this.renderInput}
                                defaultValue placeholder="Confirm password" name="confirmPassword"
                                id="signup_pass_cf" className="input-text"
                            />
                            <button type="submit" name="signup-submit" id="signup_submit" className="btn btn-full"
                                disabled={isDisable ? true : false}>Sign up
                            </button>
                            {isSignUpSuccess ? <Redirect to="/" /> : null}
                        </form>
                    </div>
                    <div className="sign-up">
                        <p>Have a account?<Link to="/signin" title>Log in</Link></p>
                    </div>
                </div>
                <Footer />
                <div className={`message  message-error ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                    {(_isBoolean(isSignUpSuccess) && !isSignUpSuccess && error !== null) ? <p>{error}</p> : ''}
                </div>
            </div>
        );
    }
}

export const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
        errors.fullname = 'Required'
    } else if (values.fullname.length > 32) {
        errors.fullname = 'Must be 32 characters or less'
    }
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 32) {
        errors.username = 'Must be 32 characters or less'

    } else if (values.username.includes(' ')) {
        errors.username = 'Must not contain spaces'
    } else if (!/^[0-9a-zA-Z]([-_]*[0-9a-zA-Z]+)*$/i.test(values.username)) {
        errors.username = "Invalid username , must [0-9 a-z A-Z]"
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address '
    } else if (values.email.startsWith('.') || values.email.endsWith('.')) {
        errors.email = 'Invalid email address'
    } else if (values.email.split('.').length > 2) {
        errors.email = 'Invalid email address'
    } else if (values.email.startsWith('_') || values.email.endsWith('_')) {
        errors.email = 'Invalid email address'
    } else if (values.email.split('_').length > 2) {
        errors.email = 'Invalid email address'
    } else if (values.email.split('@.').length > 2) {
        errors.email = 'Invalid email address'
    } else if (values.email.split('.@').length > 2) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 32) {
        errors.password = 'Invalid password'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Not match password'
    }
    return errors;
};

const mapStateToProps = (state) => {
    return {
        isSignUpSuccess: getIsSignUpSuccess(state),
        error: getError(state),
        isDisable: getIsDisable(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignUp: (user) => {
            dispatch(signUpRequested(user))
        }
    }
}

SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default reduxForm({
    form: 'streamForm',
    validate
})(SignUp);

