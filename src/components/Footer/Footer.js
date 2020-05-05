import React, {Component} from "react"
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {uploadImage} from "../../actions"
import footer_icon_home from "../../images/footer_icon_home.png"
import footer_icon_search from "../../images/footer_icon_search.png"
import footer_icon_plus from "../../images/footer_icon_plus.png"
import footer_icon_my_page from "../../images/footer_icon_my_page.png"


class Footer extends Component {

    constructor() {
        super();
        this.state = {
            isRedirect: false,
            isErrorValidate: false,
            error: []
        }
    }

    handleImageChange = event => {
        event.preventDefault();
        let file = event.target.files[0]
        this.props.dispatchImage(file);
        this.setState({
            isRedirect: true
        })
    }

    render() {
        const {isRedirect} = this.state
        return (
            <div className="footer">
                <div className="post-event">
                    <span className="icon-home"><Link to="/"><img src={footer_icon_home} alt=""/></Link></span>
                    <span className="icon-search"><img src={footer_icon_search} alt=""/></span>
                    <span className="icon-plus"><a href="#">
                        <label htmlFor="file-input">
                            <img alt="" src={footer_icon_plus}/>
                        </label>
                        <input id="file-input"
                               style={{display: 'none'}}
                               type="file"
                               name="file"
                               onChange={this.handleImageChange}
                        />
                    </a>
                        {isRedirect ? <Redirect to='/upload'/> : null}
                    </span>
                    <span className="post-icon-like"></span>
                    <span className="icon-my-page"><Link to="/profile-user"><img src={footer_icon_my_page}
                                                                                 alt=""/></Link></span>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchImage: (data) => {
            dispatch(uploadImage(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Footer);