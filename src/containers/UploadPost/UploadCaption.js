import React, {Component} from 'react'
import Footer from '../../components/Footer/Footer'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {isRedeirectSelector, upLoadPostGlobalState} from "../../selectors/uploadPostSelector"
import image_thumb from '../../images/image_thumb.jpg'
import {uploadPostRequested} from "../../actions"
import _isEmpty from "lodash/isEmpty"
import '../../css/font-awesome.css'
import '../../css/style.css'
import '../../css/error.css'

class UploadCaption extends Component {
    constructor() {
        super();
        this.state = {
            showingAlert: false,
            caption: '',
            image: '',
            display: 'none',
            hashtag: [],
            error: [],
            isError: false
        }
    }

    componentDidMount() {
        this.setState({
            display: ''
        })
    }

    handleInput = event => {
        event.preventDefault()
        const value = event.target.value
        const name = event.target.name
        const tagArray = this.state.caption.split(/(\s+)/)
        const hashtag = tagArray.filter(str => str.startsWith("#"))
        this.setState({
            [name]: value,
            hashtag: hashtag
        })
    }
    validateCaption = caption => {
        const errors = []
        if (caption.length > 1200) {
            errors.push('Must be 1200 characters or less')
        }
        return errors
    }

    onSubmit = event => {
        event.preventDefault()
        const user = sessionStorage.getItem('currentUser')
        const {caption, hashtag} = this.state
        const validateCaption = this.validateCaption(caption)
        if (!validateCaption.length === 0 || !_isEmpty(validateCaption)) {
            this.setState({
                showingAlert: true,
                error: validateCaption
            })
            setTimeout(() => {
                    this.setState({
                        showingAlert: false
                    });
                }, 3000
            )

        } else {
            const data = {
                userId: JSON.parse(user).id,
                caption: caption,
                image: this.props.state.data ? this.props.state.data.image : '',
                hashtags: hashtag,
            }
            this.props.dispatchUploadPost(data)
        }

    }

    render() {
        let imageURL = null
        if (this.props.state.data) {
            imageURL = this.props.state.data.image
        } else {
            imageURL = ''
        }
        const {error} = this.state
        const {isRedirect} = this.props
        return (
            <div className="wrap">
                <div className="header">
                    <div className="logo">
                        <Link to="/" href="#" title>Religram</Link>
                        <p className="slogan">Heaven in your hands</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="box-back box-back-v3">
                        <Link to="/" title><i className="fa fa-times" aria-hidden="true"/></Link>
                        <span>New post</span>
                        <button title style={{color: '#0099ff', border: 'none'}}>Share</button>
                        {isRedirect ? <Redirect to="/"/> : null}
                    </div>
                    <div className="content">
                        <div className="photo-post">
                            <div className="post-user">
                                <div className="post-avatar">
                                    <Link title><img src={image_thumb} alt=""/></Link>
                                    <input
                                        type="text"
                                        name="image"
                                        value={imageURL}
                                        style={{display: 'none'}}
                                    />
                                    <p>
                                        <textarea
                                            className="style-textarea"
                                            placeholder="Write a caption..."
                                            onChange={this.handleInput}
                                            value={this.state.caption}
                                            name="caption"
                                        />
                                    </p>
                                </div>
                                <div className="post-imgThumb">
                                    <img src={imageURL ? imageURL : null} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`message  message-error ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                        {error ? <p>{error}</p> : ''}
                    </div>
                </form>
                <Footer/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchUploadPost: (data) => {
            dispatch(uploadPostRequested(data))
        }
    }
}
const mapStateToProps = state => {
    return {
        state: upLoadPostGlobalState(state),
        isRedirect: isRedeirectSelector(state)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadCaption)
