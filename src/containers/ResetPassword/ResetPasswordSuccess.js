import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import icon_lock  from '../../images/icon_lock.png'

class ResetPasswordSuccess extends Component {
  render() {
    return (
        <div className="wrap">
          <div className="header">
            <div className="logo">
              <Link to="">Religram</Link>
              <p className="slogan">Heaven in your hands</p>
            </div>
          </div>
          <div className="content">
            <div className="form form-forgot-pw form-forgot-pw-success">
              <p className="center"><img src={icon_lock} alt="" /></p>
              <div className="box-info-forgot-pw">
                <p>Thanks. Please check mail for a link to reset password</p>
              </div>
            </div>
            <div className="box-back">
              <Link to="/signin">Back to log in</Link>
            </div>
          </div>
        </div>
    )
  }
}

export default ResetPasswordSuccess