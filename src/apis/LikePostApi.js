import axios from 'axios'

export const getLikePostApi = (postId, userId) => {
    const token = sessionStorage.getItem('token')
    const intance = axios.create({
        baseURL: 'https://religram.relipa-test.online/api/v1',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return intance.post(`/post/${postId}/like`, userId)
}
