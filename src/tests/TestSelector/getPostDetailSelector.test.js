import {
    getPostDetailSelector,
    getPostDetailGlobaleState,
    getLikeCountDetailSelector
} from '../../selectors/getPostDetailSelector'

describe('Test GetPostDetail Selector', () => {
    it('should select getPostDetailGlobaleState ', () => {
        const getPostDetailState = {}
        const mockedState = {
            getPostDetailReducer: getPostDetailState,
        }
        expect(getPostDetailGlobaleState(mockedState)).toEqual(getPostDetailState)
    })
    it('should select getPostDetailSelector ', () => {
        const getPostDetail = getPostDetailSelector
        const postDetail = {
            id: 634,
            createdAt: "2019-08-02T03:29:00.506",
            updatedAt: "2019-08-02T04:37:21.504",
            user: {
                id: 1,
                createdAt: "2019-07-10T06:30:02.283355",
                updatedAt: "2019-08-19T09:33:05.243",
                username: "hoainv",
                fullname: "Thanh Tam",
                email: "hoainv@relipasoft.com",
                avatar: "photos/1565844144618.png"
            },
            content: "xin chao #thiendt",
            likeCount: 1,
            commentCount: 2
        }

        const mockedState = {
            getPostDetailReducer: {
                postDetail: postDetail
            }
        };
        expect(getPostDetail(mockedState)).toEqual(postDetail)
    })

    it('Should select getLikeCountDetailSelector', () => {
        const getLikeCountDetail = getLikeCountDetailSelector
        const likeCount = 10
        const mockedState = {
            getPostDetailReducer: {
                likeCount: likeCount
            }
        }
        expect(getLikeCountDetail(mockedState)).toEqual(likeCount)
    })
})
