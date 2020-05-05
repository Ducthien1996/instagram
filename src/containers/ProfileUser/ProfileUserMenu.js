import React, {Component} from 'react'
import ProfileUserPost from "./ProfileUserPost"
import {connect} from "react-redux"
import ProfileUserFollowing from './ProfileUserFollowing'
import ProfileUserFollower from "./ProfileUserFollower"
import {Link} from 'react-router-dom'
import {
    profileUserPostRequested,
    getPostUserRequested,
    getMorePostUserRequested
} from "../../actions"
import {getPostCountProfile} from "../../selectors/profileUserPostSelector"
import {
    getCurrentPageSelector,
    getPostUserSelector,
    getTotalPageSelector
} from "../../selectors/getPosttUserDetailSelector"

class ProfileUserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailPost: false,
            isDetailFollwer: false,
            isDetailFollowing: false,
            posts: {}
        }
    }

    componentWillMount() {
        document.addEventListener('scroll', this.handleScrollFetchUserPosts)
        this.setState({
            isDetailFollwer: false,
            isDetailPost: true,
            isDetailFollowing: false
        })
        this.props.dispatchProfileUserPost()
        this.props.dispatchGetPostUser()
    }

    handleScrollFetchUserPosts = () => {
        const totalHeight = document.body.scrollHeight
        const innerHeight = window.innerHeight
        const scrollY = window.scrollY
        const {currentPage, totalPage} = this.props
        if (innerHeight + scrollY >= totalHeight) {
            if ((currentPage <= totalPage)) {
                this.props.dispatchGetMorePostUser(currentPage)
            }
        }
    }

    renderDetailFollower = () => {
        this.setState({
            isDetailFollwer: true,
            isDetailPost: false,
            isDetailFollowing: false
        })
    }

    renderDetailPost = () => {
        document.addEventListener('scroll', this.handleScrollFetchUserPosts)
        this.setState({
            isDetailFollwer: false,
            isDetailPost: true,
            isDetailFollowing: false
        })
        this.props.dispatchProfileUserPost()
        this.props.dispatchGetPostUser()
    }

    renderDetailFollowing = () => {
        this.setState({
            isDetailFollwer: false,
            isDetailPost: false,
            isDetailFollowing: true
        })
    }


    render() {
        if (!this.props.posts) {
            return (
                <div>
                    Loading !!!!
                </div>
            )
        } else if (this.props.posts === 0) {
            console.log(this.props.posts)
            return (
                <div>
                    You don't have any post
                    Click <Link to="/upload">here</Link> to upload post !!!
                </div>
            );

        } else {
            const {postCount, followerCount, followingCount} = this.props.posts
            const {isDetailPost, isDetailFollwer, isDetailFollowing} = this.state
            const {postUser} = this.props
            return (
                <div className="tab">
                    <div className="tab-title">
                        <button onClick={this.renderDetailPost} title className="active"><span>{postCount}</span>posts
                        </button>
                        <button onClick={this.renderDetailFollower} title><span>{followerCount}</span>followers</button>
                        <button onClick={this.renderDetailFollowing} title><span>{followingCount}</span>following
                        </button>
                    </div>
                    {isDetailPost ? <ProfileUserPost posts={postUser}/> : null}
                    {isDetailFollwer ? <ProfileUserFollower/> : null}
                    {isDetailFollowing ? <ProfileUserFollowing/> : null}
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: getPostCountProfile(state),
        postUser: getPostUserSelector(state),
        totalPage: getTotalPageSelector(state),
        currentPage: getCurrentPageSelector(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        dispatchProfileUserPost: () => {
            dispatch(profileUserPostRequested())
        },
        dispatchGetPostUser: () => {
            dispatch(getPostUserRequested())
        },
        dispatchGetMorePostUser: (currentPage) => {
            dispatch(getMorePostUserRequested(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUserMenu)

