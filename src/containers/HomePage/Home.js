import React, { Component } from 'react'
import '../../css/font-awesome.css'
import '../../css/style.css'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PostList from './PostList';
import { getPost, getMorePosts } from '../../actions';
import { getPostsSelector, isFetchingSelector, currentPageSelector, totalPageSelector } from '../../selectors/getPostsSelector';

class Home extends Component {
    componentDidMount() {
        document.addEventListener('scroll', this.handleScrollFetchPosts)
        const posts = JSON.parse(sessionStorage.getItem('posts'))
        if (posts.length < 6) {
            this.props.dispatchGetPost()
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScrollFetchPosts)
    }

    handleScrollFetchPosts = () => {
        const totalHeight = document.body.scrollHeight
        const innerHeight = window.innerHeight
        const scrollY = window.scrollY
        const { isFetching, currentPage, totalPage } = this.props
        if (innerHeight + scrollY >= totalHeight) {
            if ((currentPage + 1 <= totalPage) && !isFetching) {
                this.props.dispatchGetMorePosts(currentPage + 1)
            }
        }
    }

    render() {
        const { posts, isFetching } = this.props
        sessionStorage.setItem('posts', JSON.stringify(posts))
        return (
            <div className="wrap">
                <Header />
                <PostList
                    posts={posts}
                    isFetching={isFetching}
                />
                <Footer />
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetPost: () => dispatch(getPost()),
        dispatchGetMorePosts: (currentPage) => dispatch(getMorePosts(currentPage))
    }
}

const mapStateToProps = (state) => {
    return {
        posts: getPostsSelector(state),
        isFetching: isFetchingSelector(state),
        currentPage: currentPageSelector(state),
        totalPage: totalPageSelector(state),
    }
}

export default connect(null, mapDispatchToProps)(Home)
