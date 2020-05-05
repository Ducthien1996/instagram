import axios from 'axios'

export const addCommentApi = (data, postId) => {
    const token = sessionStorage.getItem('token')
    const intance = axios.create({
        baseURL: 'https://religram.relipa-test.online/api/v1',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return intance.post(`/post/${postId}/comment`, data)
        .then(response => response)
        .catch(error => Object.assign({}, error))
}

