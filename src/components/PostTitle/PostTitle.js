import React, { Component } from 'react'
import ReactHashtag from 'react-hashtag'

export default class PostTitle extends Component {
    render() {
        const { content } = this.props
        return (
            <div className="post-title">
                <div className="truncate-text demission">
                    <ReactHashtag className="hashtag">{content ? content : ''}</ReactHashtag>
                </div>
            </div>
        )
    }
}
