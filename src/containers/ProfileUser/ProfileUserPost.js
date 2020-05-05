import React, {Component} from "react"
import _isEmpty from 'lodash/isEmpty'
import ProfileUserPostItem from './ProfileUserPostItem'

class ProfileUserPost extends Component {
    render() {
        const {posts} = this.props
        return (
            <div className="tab-content">
                <ul className="ul-list-post">
                    {_isEmpty(posts) ? null : posts.map(post => (
                        <ProfileUserPostItem
                            key={post.id}
                            post={post}
                            id={post.id}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProfileUserPost
