import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostUser from '../../components/PostUser/PostUser'
import PostImage from '../../components/PostImage/PostImage'
import PostEvent from '../../components/PostEvent/PostEvent'
import PostTitle from '../../components/PostTitle/PostTitle'
import PostComment from './PostComment'
import { likePost } from '../../actions'

class PostListItem extends Component {
    handleClickLike = (postId, userId) => {
        this.props.dispatchLikePost(postId, userId)
    }
    render() {
        const { post } = this.props
        const { photos, createdAt, id, user, commentCount, comments, content, likeCount } = post
        return (
            <div className="post-item">
                <PostUser
                    user={user}
                    createdAt={createdAt}
                />
                <PostImage photos={photos} />
                <PostEvent
                    post={post}
                    onClickLike={this.handleClickLike}
                    id={id}
                    likeCount={likeCount}
                />
                <PostTitle content={content} />
                {
                    comments ? <PostComment
                        id={id}
                        commentCount={commentCount}
                        user={user}
                        comments={comments}
                    /> : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLikePost: (postId, userId) => dispatch(likePost(postId, userId))
    }
}

export default connect(null, mapDispatchToProps)(PostListItem)