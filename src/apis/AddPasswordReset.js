import { instance } from '../commons/instanceApi'

export const AddPasswordResetApi = (token, data) => {
    return instance.post(`auth/resetpassword/verify/${token}`, data)
        .then(response => response)
        .catch(error => Object.assign({}, error))
}