import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://religram.relipa-test.online/api/v1',
})

export const instanceHeader = axios.create({
    baseURL: 'https://religram.relipa-test.online/api/v1',
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
})
