import React from 'react'
import { mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import PostEventDetail from '../../../components/PostEvent/PostEventDetail'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Test PostEvent Detail', () => {
    let postEventDetail = null
    const mockPost = {
        id: 2783,
        createdAt: "2019-09-04T01:30:14.477",
        updatedAt: "2019-09-04T01:30:14.477",
        user: {
            id: 5,
            createdAt: "2019-07-18T00:03:04.39745",
            updatedAt: "2019-08-28T21:25:11.435",
            username: "thiendt",
            fullname: "Dinh Trong Thien",
            email: "thiendt@relipasoft.com",
            avatar: "https://image.thanhnien.vn/660/uploaded/vietthong/2017_07_26/hotgirl-sam-ghien-gunpow-tan-the-gioi-02_rale.jpg"
        },
        likeCount: 0,
        commentCount: 0,
        photos: [
            {
                id: 2784,
                createdAt: "2019-09-04T01:30:14.487",
                updatedAt: "2019-09-04T01:30:14.487",
                photoUri: "photos/1567560614483.png"
            }
        ],
        isLiked: true,
    }
    const mockProps = {
        post: mockPost,
        likeCount: 10,
        onClickLike: jest.fn(),
    }
    
    beforeEach(() => {
        postEventDetail = mount(<Router><PostEventDetail {...mockProps} /></Router>)
    })

    afterEach(() => {
        postEventDetail = null
    })

    it ('Should render to match snapshot', () => {
        expect (shallowToJson(postEventDetail)).toMatchSnapshot()
    })

    it('Should handle click like', () => {
        const button = postEventDetail.find('#btn-click')
        const mockFunction = jest.fn()
        button.simulate('click', mockFunction(1,1))
        expect(mockFunction).toHaveBeenCalled()
    })
})