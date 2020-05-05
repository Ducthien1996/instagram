import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import Home from '../../containers/HomePage/Home'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const mockPost = [
    {
        id: 2872,
        createdAt: "2019-09-05T04:45:07.973",
        updatedAt: "2019-09-05T04:45:07.973",
        user: {
            id: 4,
            createdAt: "2019-07-18T00:02:50.260478",
            updatedAt: "2019-08-28T01:39:14.814",
            username: "kybh",
            fullname: "Bui Hoang Ky",
            email: "kybh@relipasoft.com",
            avatar: "https://i.a4vn.com/2018/10/4/nghen-tho-voi-co-nang-hotgirl-xinh-dep-khoe-vong-1-goi-cam-5ae9ee.jpg"
        },
        content: "haha #maai",
        likeCount: 0,
        commentCount: 0,
        photos: [
            {
                id: 2873,
                createdAt: "2019-09-05T04:45:07.98",
                updatedAt: "2019-09-05T04:45:07.98",
                photoUri: "photos/1567658707977.png"
            }
        ],
        isLiked: false
    },
    {
        id: 2869,
        createdAt: "2019-09-05T04:44:45.16",
        updatedAt: "2019-09-05T04:44:45.16",
        user: {
            id: 4,
            createdAt: "2019-07-18T00:02:50.260478",
            updatedAt: "2019-08-28T01:39:14.814",
            username: "kybh",
            fullname: "Bui Hoang Ky",
            email: "kybh@relipasoft.com",
            avatar: "https://i.a4vn.com/2018/10/4/nghen-tho-voi-co-nang-hotgirl-xinh-dep-khoe-vong-1-goi-cam-5ae9ee.jpg"
        },
        content: "#minion minion",
        likeCount: 0,
        commentCount: 0,
        photos: [
            {
                id: 2870,
                createdAt: "2019-09-05T04:44:45.182",
                updatedAt: "2019-09-05T04:44:45.182",
                photoUri: "photos/1567658685179.png"
            }
        ],
        isLiked: false
    }
]
const mockProps = {
    posts : mockPost,
    isFetching : true,
    currentPage : 1,
    totalPage: 2
}

describe('<Home />', () => {
    let storeConfig
    let homeContainer = null
    beforeAll(() => {
        storeConfig = mockStore()
        homeContainer = mount(
            <Provider store={storeConfig} >
                <BrowserRouter>
                    <Home {...mockProps} />
                </BrowserRouter>
            </Provider>
        )
    })
    expect(homeContainer).toMatchSnapshot()
})