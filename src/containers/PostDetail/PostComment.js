import React, { Component } from 'react'
import PostCommentItem from './PostCommentItem';

export default class PostComment extends Component {
    render() {
        const { comments, user } = this.props
        return (
            <div className="post-comment">
                {
                    comments ? comments.map(comment => (
                        <PostCommentItem
                            key={comment.id}
                            comment={comment}
                            user={user}
                        />
                    )) : null
                }
            </div>
        )
    }
}
