import { instance } from '../commons/instanceApi'

export const ResetPassWordApi = data => {
    return instance.post('/auth/resetpassword', data)
        .then(response => response)
        .catch(error => Object.assign({}, error))
}