import React from 'react'
import { mount } from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import PostEvent from '../../../components/PostEvent/PostEvent'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Test PostEvent in Home', () => {
   let postEvent = null
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
       likeCount: 10,
       post: mockPost,
       onClickLike: jest.fn(),
   }
  
   beforeEach(() => {
     postEvent = mount(<Router><PostEvent {...mockProps} /></Router>)
   })

   afterEach(() => {
     postEvent = null
   })

   it ('should render to match snapshot', () => {
     expect (shallowToJson(postEvent)).toMatchSnapshot()
   })

   it('should handle click like', () => {
     const button = postEvent.find("#btn-like")
     const mockFunction = jest.fn()
     button.simulate('click', mockFunction(1, 1))
     expect(mockFunction).toHaveBeenCalled()
   })
})