import React, { Component } from 'react'

export default class PostImage extends Component {
    render() {
        const { photos } = this.props
        return (
            <div className="post-image">
                <p className="post-thumb">
                    {
                        photos.map(photo => (
                            <img
                                key={photo.id}
                                src={`https://religram.relipa-test.online/${photo.photoUri}`}
                                alt=""
                                style={{ width: '100%', height: '300px' }}
                            />
                        ))
                    }
                </p>
            </div>
        )
    }
}
