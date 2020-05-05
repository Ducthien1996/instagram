import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/" >Religram </Link>
                    <p className="slogan">Heaven in your hands</p>
                </div>
            </div>
        )
    }
}
export default Header