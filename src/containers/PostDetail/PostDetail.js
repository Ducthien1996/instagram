import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PostListDetail from './PostListDetail'
import { Link } from 'react-router-dom'

class PostDetail extends Component {
    render() {
        const postId = this.props.match.params.postId
        return (
            <div className="wrap">
                <Header />
                <div className="box-back box-back-v2">
                    <Link to =""><i className="fa fa-angle-left" aria-hidden="true" />Photo</Link>
                </div>
                <PostListDetail postId = {postId} />
                <Footer />
            </div>
        )
    }
}

export default PostDetail