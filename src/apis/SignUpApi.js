import { instance } from '../commons/instanceApi'

export const signUp = user => {
    return instance.post('/auth/signup', user)
        .then(respone => respone)
        .catch(error => Object.assign({}, error))
}
