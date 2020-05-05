import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import SignInForm from '../../containers/SignInForm/SignInForm'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import PostComment from '../../containers/HomePage/PostComment';

const mockStore = configureStore()
const postCommentInitialState = {
    commentCount: 10,
    comments: '',
}
const mockProps = {
    commentCount: 10,
    comments: [
        {
            id: 1590,
            createdAt: "2019-08-28T21:16:06.691",
            updatedAt: "2019-08-28T21:16:06.691",
            user: {
                id: 5,
                createdAt: "2019-07-18T00:03:04.39745",
                updatedAt: "2019-09-05T03:51:53.906",
                username: "thiendt",
                fullname: "Dinh Trong Thien",
                email: "thiendt@relipasoft.com",
                avatar: "https://image.thanhnien.vn/660/uploaded/vietthong/2017_07_26/hotgirl-sam-ghien-gunpow-tan-the-gioi-02_rale.jpg"
            },
            comment: "add"
        }
    ],
    id: 1,
}

describe('<PostComment />', () => {
    let storeConfig;
    let postCommentContainer = null
    beforeAll(() => {
        storeConfig = mockStore(postCommentInitialState)
        postCommentContainer = mount(
            <Provider store={storeConfig}>
                <BrowserRouter>
                    <div>
                        <PostComment {...mockProps} />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    })
    expect(postCommentContainer).toMatchSnapshot();
})