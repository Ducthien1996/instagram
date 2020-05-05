import React, { Component } from 'react'
import PostCommentItem from './PostCommentItem'
import {Link} from 'react-router-dom'

export default class PostComment extends Component {
    render() {
        const { commentCount, comments, id } = this.props
        return (
            <div className="post-comment">
                <Link to={`/detail-post/${id}`}>
                    <p className="post-view-all">{commentCount > 3 ? `View all ${commentCount} comments` : null} </p>
                </Link>
                {
                    comments ? comments.map(comment => (
                        <PostCommentItem
                            key={comment.id}
                            comment={comment}
                        />
                    )) : null
                }
            </div>
        )
    }
}
