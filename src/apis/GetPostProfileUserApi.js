import {instanceHeader} from '../commons/instanceApi'

export const getPostProfileUserApi = () => {
    const user = sessionStorage.getItem('currentUser')
    const id = JSON.parse(user).id
    return instanceHeader.get(`user/${id}`)
        .then(response => response)
        .catch(error => Object.assign({}, error))
}

export const getPostUserApi = () => {
    const user = sessionStorage.getItem('currentUser')
    const id = JSON.parse(user).id
    return instanceHeader.get(`user/${id}/posts?page=1`)
}

export const getMorePostUserApi = (currentPage) => {
    const user = sessionStorage.getItem('currentUser')
    const id = JSON.parse(user).id
    return instanceHeader.get(`user/${id}/posts?page=${currentPage+1}`)
}

