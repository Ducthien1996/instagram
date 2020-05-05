import React, {Component} from "react"
import image_thumb from '../../images/image_thumb.jpg'
import {Link} from 'react-router-dom'

class ProfileUserFollowing extends Component {

    render() {
        return (
            <div className="tab-content">
                <ul className="ul-list-post">
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                    <li><Link to="/profile-user" title=""><img src={image_thumb} alt=""/></Link></li>
                </ul>
            </div>
        );
    }
}

export default ProfileUserFollowing
