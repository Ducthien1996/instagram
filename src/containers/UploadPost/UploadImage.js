import React, {Component} from "react"
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import _isEmpty from 'lodash/isEmpty'
import '../../css/font-awesome.css'
import '../../css/style.css'
import '../../css/error.css'
import Footer from '../../components/Footer/Footer'
import {upLoadPostGlobalState} from "../../selectors/uploadPostSelector"
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper'
import {uploadImage} from "../../actions"
import {getBase64} from "../../commons/getBase64"

class UploadImage extends Component {
    constructor() {
        super()
        this.state = {
            showAlert: false,
            imageURL: '',
            cropResult: null,
            isRedirect: false,
            disabled: true,
            error: []
        }
    }

    componentDidMount() {
        if (this.props.state.data) {
            const imageURL = this.props.state.data
            const validateFile = this.validateFile(imageURL)
            if (validateFile.length === 0 || _isEmpty(validateFile)) {
                getBase64(imageURL).then(base64 => {
                    this.setState({
                        imageURL: base64,
                        disabled: false,
                        error: []
                    })
                })
            } else {
                this.setState({
                    imageURL: '',
                    showingAlert: true,
                    error: validateFile[0]
                })
                setTimeout(() => {
                        this.setState({
                            showingAlert: false
                        });
                    }, 3000
                )
            }
        } else {
            this.setState({})
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps) {
            const imageURL = nextProps.state.data
            const validateFile = this.validateFile(imageURL)
            if (validateFile.length === 0 || _isEmpty(validateFile)) {
                getBase64(imageURL).then(base64 => {
                    this.setState({
                        imageURL: base64,
                        disabled: false,
                        error: []
                    })
                })
            } else {
                this.setState({
                    imageURL: '',
                    showingAlert: true,
                    error: validateFile[0]
                })
                setTimeout(() => {
                        this.setState({
                            showingAlert: false
                        });
                    }, 3000
                )
            }
        }
    }

    validateFile = (file) => {
        const errors = []
        const validImageTypes = ['image/jpg', 'image/jpeg', 'image/png']
        if (!validImageTypes.includes(file.type)) {
            errors.push('Please choose image file')
        }
        if (file.size > 5000000) {
            errors.push("Must be image 50MB or less")
        }

        return errors
    }

    cropImage = () => {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        });

    }

    handleClickNext = (event) => {
        event.preventDefault()
        const data = {
            image: this.cropper.getCroppedCanvas().toDataURL(),
        }
        this.props.dispatchImage(data)
        this.setState({
            isRedirect: true
        })
    }


    render() {
        const {error, imageURL, disabled} = this.state
        return (
            <div className="wrap">
                <div className="header">
                    <div className="logo">
                        <Link to="/" title>Religram</Link>
                        <p className="slogan">Heaven in your hands</p>
                    </div>
                </div>
                <div className="box-back box-back-v3">
                    <Link to="/" title><i className="fa fa-times" aria-hidden="true"/></Link>
                    <span>New post</span>
                    <button style={{color: '#0099ff', border: 'none'}} onClick={this.handleClickNext} title
                            id="btn-next" disabled={disabled ? true : false}>Next
                    </button>
                    {this.state.isRedirect ? <Redirect to="/upload-caption"/> : null}
                </div>
                <div className="content">
                    <div className="photo-upload">
                        <div className="photo-img">
                            <Cropper
                                viewMode='3'
                                dragMode='move'
                                autoCropArea='1'
                                restore={false}
                                modal={false}
                                guides={false}
                                highlight={false}
                                cropBoxMovable={false}
                                cropBoxResizable={false}
                                toggleDragModeOnDblclick={false}
                                style={{height: 400, width: '100%'}}
                                aspectRatio={4 / 3}
                                // preview=".img-preview"
                                src={imageURL}
                                ref={cropper => {
                                    this.cropper = cropper;
                                }}
                            />
                        </div>
                        <div className="image-cropper">
                            <img alt="" id="image-crop-result"
                                 src={this.state.cropResult ? this.state.cropResult : null}/>
                        </div>
                        <div className="photo-btn">
                            <button onClick={this.cropImage} title className="btn button-crop"
                                    id="button-crop" disabled={disabled ? true : false}>Crop
                            </button>
                            <Link title to="/upload-filter" className="btn"
                                  disabled={disabled ? true : false}>Filter</Link>
                        </div>
                    </div>
                </div>
                <div className={`message  message-error ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                    {error ? <p>{error}</p> : ''}
                </div>
                <Footer/>
            </div>
        )
            ;
    }
}

const mapStateToProps = state => {
    return {
        state: upLoadPostGlobalState(state)
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        dispatchImage: (data) => {
            dispatch(uploadImage(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadImage)
