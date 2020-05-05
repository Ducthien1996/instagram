import { instance } from '../commons/instanceApi'

export const signUpFacebookApi = user => {
    return instance.post('/auth/signup?viaFacebook=true', user)
        .then(response => response)
        .catch(error => Object.assign({}, error))
} 