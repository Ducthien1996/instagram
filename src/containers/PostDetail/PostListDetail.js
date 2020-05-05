import React, { Component } from 'react'
import { getPostsDetail, getComment, addComment, getMoreComment, likePost } from '../../actions'
import { connect } from 'react-redux'
import { getPostDetailSelector, getLikeCountDetailSelector } from '../../selectors/getPostDetailSelector'
import PostUser from '../../components/PostUser/PostUser'
import PostImage from '../../components/PostImage/PostImage'
import PostTitle from '../../components/PostTitle/PostTitle'
import PostComment from './PostComment'
import ReactSnackBar from "react-js-snackbar"
import { getCommentsSelector, getCurrentPageSelector, getTotalPageSelector } from '../../selectors/commentSelector'
import PostEventDetail from '../../components/PostEvent/PostEventDetail'

class PostListDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLike: true,
            input_comment: "",
            loading_button: false,
            hashtag: [],
            Show: false,
            Showing: false,
        }
    }

    show = () => {
        if (this.state.Showing) return;

        this.setState({ Show: true, Showing: true });
        setTimeout(() => {
            this.setState({ Show: false, Showing: false });
        }, 2000);
    };

    handleLoadMoreComment = () => {
        const { currentPage } = this.props
        const { postId } = this.props
        this.props.dispatchGetMoreComment(postId, currentPage + 1)
    }

    componentDidMount() {
        const { postId } = this.props
        this.props.dispatchGetPostsDetail(postId)
        this.props.dispatchGetComments(postId)
    }

    handleChange = (event) => {
        const value = event.target.value
        const tagArray = this.state.input_comment.split(/(\s+)/)
        const hashTag = tagArray.filter(str => str.startsWith('#'))
        this.setState({
            input_comment: value,
            hashtag: hashTag,
        })
    }

    handleKeyPress = (event) => {
        if (event.charCode === 13 && event.shiftKey === false) {
            event.preventDefault()
            const comment = this.state.input_comment
            const { postId } = this.props
            const users = sessionStorage.getItem('currentUser')
            const userId = (JSON.parse(users).id)
            const hashtag = this.state.hashtag
            const data = {
                userId: userId,
                comment: comment,
                hashtags: hashtag,
            }
            if (comment.length > 1000) {
                this.show()
            }
            if (comment && comment.length <= 1000) {
                this.props.dispatchAddComment(data, postId)
            }
            this.setState({
                input_comment: '',
            })
        }
    }

    handleLoadComment = () => {
        const { currentPage } = this.props
        const { postId } = this.props
        this.props.dispatchGetMoreComment(postId, currentPage + 1)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const comment = this.state.input_comment
        const { postId } = this.props
        const users = sessionStorage.getItem('currentUser')
        const userId = (JSON.parse(users).id)
        const hashtag = this.state.hashtag
        const data = {
            userId: userId,
            comment: comment,
            hashtags: hashtag,
        }
        if (comment.length > 1000) {
            this.show()
        }
        if (comment && comment.length <= 1000) {
            this.props.dispatchAddComment(data, postId)
        }
        this.setState({
            input_comment: "",
        })
    }

    handleClickLike = (postId, userId) => {
        this.props.dispatchLikePost(postId, userId)
    }

    render() {
        const { postDetail, comments, currentPage, totalPage, likeCount } = this.props
        const { user, createdAt, photos, content, commentCount, id } = postDetail
        return (
            <div className="content">
                <div className="post-list">
                    <div className="post-item">
                        <PostUser
                            user={user ? user : ''}
                            createdAt={createdAt ? createdAt : ''}
                        />
                        <PostImage
                            photos={photos ? photos : []}
                        />
                        <PostEventDetail
                            post={postDetail}
                            onClickLike={this.handleClickLike}
                            id={id}
                            likeCount={likeCount}
                        />
                        <PostTitle
                            content={content}
                        />
                        <form className="post-comment-form" onSubmit={this.handleSubmit}>
                            <div>
                                <textarea
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
                                    value={this.state.input_comment}
                                    className="input_comment"
                                    placeholder="Write a comment..."
                                />
                                <button className="comment" disabled="" type="submit" >Post</button>
                            </div>
                        </form>
                        {
                            comments ? <PostComment
                                commentCount={commentCount}
                                comments={comments ? comments : ''}
                                user={user}
                            /> : null
                        }
                        {
                            (currentPage !== totalPage) ?
                                <button className="more_button"
                                    style={{ marginLeft: '45%', marginBottom: '10px', background: 'transparent', border: '0px' }}
                                    onClick={this.handleLoadComment}
                                >more...
                            </button> : null
                        }
                    </div>
                    <ReactSnackBar Show={this.state.Show}>
                        Must be less 1000 character
                    </ReactSnackBar>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postDetail: getPostDetailSelector(state),
        comments: getCommentsSelector(state),
        currentPage: getCurrentPageSelector(state),
        totalPage: getTotalPageSelector(state),
        likeCount: getLikeCountDetailSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetPostsDetail: (postId) => dispatch(getPostsDetail(postId)),
        dispatchGetComments: (postId) => dispatch(getComment(postId)),
        dispatchAddComment: (data, postId) => dispatch(addComment(data, postId)),
        dispatchGetMoreComment: (postId, currentPage) => dispatch(getMoreComment(postId, currentPage)),
        dispatchLikePost: (postId, userId) => dispatch(likePost(postId, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListDetail)