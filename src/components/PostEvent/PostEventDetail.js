import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostEventDetail extends Component {
    handleClickLike = () => {
        const postId = this.props.post.id
        const user = sessionStorage.getItem('currentUser')
        const id = JSON.parse(user).id
        const userId = {
            userId: id
        }
        this.props.onClickLike(postId, userId)
    }
    render() {
        const { post, likeCount } = this.props
        sessionStorage.setItem('likeCount', likeCount)
        const { isLiked, id } = post
        let className
        if (isLiked === true) {
            className = 'post-icon-like active'
        } else {
            className = 'post-icon-like'
        }
        return (
            <div className="post-event">
                <p>
                    <span className={className} id="btn-click" onClick={this.handleClickLike}></span>
                    <span className="post-icon-comment"><Link to={`/detail-post/${id}`} /></span>
                    <span className="post-icon-upload"><Link to="" /></span>
                </p>
                <p>{likeCount === 0 ? null : (likeCount === 1 ? `${likeCount} Like` : `${likeCount} Likes`)}</p>
            </div>
        )
    }
}
