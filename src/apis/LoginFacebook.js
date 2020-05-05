import { instance } from '../commons/instanceApi'

export const loginFacebookAPI = accessToken => {
    return instance.post('auth/facebook', accessToken)
        .then(response => response)
        .catch(error => Object.assign({}, error))
} 