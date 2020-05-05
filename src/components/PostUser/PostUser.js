import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import avatar_person from '../../images/avatar_person.jpg'
import moment from 'moment'

class PostUser extends Component {
    render() {
        const { createdAt, user } = this.props
        const {avatar} = user
        return (
            <div className="post-user">
                <div className="post-avatar">
                    <Link to= "/profile-user"><img src={avatar ? `https://religram.relipa-test.online/${avatar}` : avatar_person} alt="" /></Link>
                </div>
                <div className="post-userName">
                    <p><Link to ="/profile-user">{user.username}</Link></p>
                    <p><span className="post-date">{moment(createdAt).fromNow()}</span> Ha Noi, Viet Nam</p>
                </div>
            </div>
        )
    }
}

export default PostUser