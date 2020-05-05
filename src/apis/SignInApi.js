import { instance } from '../commons/instanceApi'

export const signIn = user => {
    return instance.post('/auth/login', user)
        .then(response => response)
        .catch(error => Object.assign({}, error))
}