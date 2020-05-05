import axios from 'axios'

export const getMorePostsApi = (currentPage) => {
    const token = sessionStorage.getItem('token')
    const intance = axios.create({
        baseURL: 'https://religram.relipa-test.online/api/v1',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return intance.get(`/post?page=${currentPage + 1}`)
}