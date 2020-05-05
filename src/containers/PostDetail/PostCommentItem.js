import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _get from 'lodash/get'
import ReactHashtag from 'react-hashtag'
import avatar_person from '../../images/avatar_person.jpg'
import moment from 'moment'

export default class PostCommentItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCheckClick: false
        }
    }

    handleClick = (event) => {
        this.setState({
            isCheckClick: true
        })
    }

    WordCount = (str) => {
        return str.split(" ").length;
    }

    trimText = (str, wordCount) => {
        const strArray = str.split(' ');
        const subArray = strArray.slice(0, wordCount);
        const result = subArray.join(" ");
        const totalWord = this.WordCount(str);
        if (totalWord >= 50) {
            return result + '...';
        } else {
            return result;
        }
    }
    render() {
        const str = _get(this.props.comment, 'comment', '')
        const { createdAt } = this.props.comment
        const { username, avatar } = this.props.comment.user
        var result = this.trimText(str, 50);
        const totalWord = this.WordCount(str);
        const { isCheckClick } = this.state
        return (
            <div className="post-comment__item">
                <div className="post-user">
                    <div className="post-avatar">
                        <Link to="/profile-user"><img src={avatar ? `https://religram.relipa-test.online/${avatar}` : avatar_person} alt="" /></Link>
                    </div>
                    <div className="post-userName">
                        <div><Link to="/profile-user">{username}</Link></div>
                        {
                            totalWord > 50 && !isCheckClick ?
                                <div className="truncate-text demission">
                                    <ReactHashtag className="hashtag">{result}</ReactHashtag>
                                    <button className=""
                                        style={{ background: 'transparent', border: '0px', color: '#999' }}
                                        onClick={this.handleClick}
                                    >more
                                        </button>
                                </div> :
                                <div className="truncate-text demission">
                                    <ReactHashtag className="hashtag">{str}</ReactHashtag>
                                </div>
                        }
                        <p><span className="show-comment">{moment(createdAt).fromNow()}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
