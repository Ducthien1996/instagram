import {
    getPostsSelector,
    isFetchingSelector,
    currentPageSelector,
    totalPageSelector,
    getPostsGlobaleState,
    getLikeCountSelector
} from '../../selectors/getPostsSelector'

describe('Test GetPosts Selector', () => {
    it('should select getPostsGlobaleState ', () => {
        const getPostsState = {}
        const mockedState = {
            getPostsReducer: getPostsState,
        }
        expect(getPostsGlobaleState(mockedState)).toEqual(getPostsState)
    })

    it('should select getPostsSelector ', () => {
        const getPosts = getPostsSelector
        const posts = {
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
            getPostsReducer: {
                posts: posts
            }
        };
        expect(getPosts(mockedState)).toEqual(posts)
    })

    it('should select getisFetchingSelector', () => {
        const getIsFetching = isFetchingSelector
        const isFetching = true
        const mockedState = {
            getPostsReducer: {
                isFetching: isFetching
            }
        }
        expect(getIsFetching(mockedState)).toEqual(isFetching)
    })

    it('Should select getCurrentPage', () => {
        const getCurrentPage = currentPageSelector
        const currentPage = 1
        const mockedState = {
            getPostsReducer: {
                currentPage: currentPage
            }
        }
        expect(getCurrentPage(mockedState)).toEqual(currentPage)
    })

    it('Should select totalPage', () => {
        const getTotalPage = totalPageSelector
        const totalPage = 1
        const mockedState = {
            getPostsReducer: {
                totalPage: totalPage
            }
        }
        expect(getTotalPage(mockedState)).toEqual(totalPage)
    })

    it('Should select likeCount', () => {
        const getlikeCount = getLikeCountSelector
        const likeCount = 5
        const mockedState = {
            getPostsReducer: {
                likeCount: likeCount
            }
        }
        expect(getlikeCount(mockedState)).toEqual(likeCount)
    })
})
