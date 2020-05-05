import React, {Component} from 'react'
import _isEmpty from 'lodash/isEmpty'
import {Link} from 'react-router-dom'

class ProfileUserPostItem extends Component {
    render() {
        const {post,id} = this.props
        const images = post.photos
        return (
            <div>
                {
                    _isEmpty(images) ? null : images.map(image => (
                        <li>
                            <Link to={`/detail-post/${id}`} title>
                                <img
                                    key={image.id}
                                    src={`https://religram.relipa-test.online/${image.photoUri}`}
                                    alt=""/>
                            </Link>
                        </li>
                    ))
                }
            </div>
        );
    }
}

export default ProfileUserPostItem
