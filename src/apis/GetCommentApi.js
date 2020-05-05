import axios from 'axios'

export const getCommentsApi = (postId) => {
    const token = sessionStorage.getItem('token')
    const intance = axios.create({
        baseURL: 'https://religram.relipa-test.online/api/v1',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return intance.get(`/post/${postId}/comment?page=1`)
}

export const getMoreCommentsApi = (postId, currentPage) => {
    const token = sessionStorage.getItem('token')
    const intance = axios.create({
        baseURL: 'https://religram.relipa-test.online/api/v1',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return intance.get(`/post/${postId}/comment/?page=${currentPage}`)
}