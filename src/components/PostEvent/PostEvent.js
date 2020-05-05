import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _isNaN from 'lodash/isNaN'

export default class PostEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likeCountState: this.props.likeCount,
            isClick: false
        }
    }

    handleClickLike = () => {
        const { post } = this.props
        const { isLiked } = post
        const postId = this.props.post.id
        const user = sessionStorage.getItem('currentUser')
        const id = JSON.parse(user).id
        const userId = {
            userId: id
        }
        this.props.onClickLike(postId, userId)
        if (isLiked) {
            this.setState({
                likeCountState: _isNaN(this.state.likeCountState) ? parseInt(sessionStorage.getItem('likeCount')) - 1 : this.state.likeCountState - 1,
                isClick: true
            })
        } else {
            this.setState({
                likeCountState: _isNaN(this.state.likeCountState) ? parseInt(sessionStorage.getItem('likeCount')) + 1 : this.state.likeCountState + 1,
                isClick: true
            })
        }
    }
    
    render() {
        const likeCountState = _isNaN(this.state.likeCountState) ? sessionStorage.getItem('likeCount') : this.state.likeCountState
        const { post } = this.props
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
                    <span className={className} id="btn-like" onClick={this.handleClickLike}></span>
                    <span className="post-icon-comment"><Link to={`/detail-post/${id}`} /></span>
                    <span className="post-icon-upload"><Link to="" /></span>
                </p>
                <p>{parseInt(likeCountState) === 0 ? null : (parseInt(likeCountState) === 1 ? `${likeCountState} Like` : `${likeCountState} Likes`)}</p>
            </div>
        )
    }
}
