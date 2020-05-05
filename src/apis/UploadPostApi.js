import {instanceHeader} from "../commons/instanceApi";

export const uploadPostApi = (data) => {

    return instanceHeader.post(`/post`, data)
        .then(response => response)
        .catch(error => Object.assign({}, error))
}
