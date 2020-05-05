import React, {Component} from "react"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ProfileUserMenu from './ProfileUserMenu'
import {Link} from 'react-router-dom'


class ProfileUser extends Component {

    render() {
        const user = sessionStorage.getItem('currentUser')
        const username = JSON.parse(user).username
        const avatar = JSON.parse(user).avatar

        return (
            <div className="wrap">
                <Header/>
                <div className="content">
                    <div className="profile">
                        <div className="profile-header">
                            <div className="post-user">
                                <div className="post-avatar">
                                    <Link to="" title><img src={`https://religram.relipa-test.online/${avatar}`} alt=""/></Link>
                                </div>
                                <div className="post-userName">
                                    <p><Link to="/" title>religram</Link></p>
                                    <p><Link to="" title className="edit-proflie btn">Edit
                                        profile</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="post-user__name">
                                <p style={{marginLeft: '17px'}}>{username}</p>
                            </div>
                        </div>
                        <div className="profile-content">
                            <ProfileUserMenu/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ProfileUser


