import React, { Component } from 'react'
import PostListItem from './PostListItem'
import _isEmpty from 'lodash/isEmpty'
import Spinner from '../../components/Spinner/Spinner'

class PostList extends Component {
    render() {
        const { posts, isFetching } = this.props
        return (
            <div className="content">
                <div className="post-list">
                    {
                        _isEmpty(posts) ? null : posts.map(post => (
                            <PostListItem
                                key={post.id}
                                post={post}
                            />
                        ))
                    }
                </div>
                {
                    isFetching ? <div className="spinner"><Spinner /></div> : null
                }
            </div>
        )
    }
}

export default PostList