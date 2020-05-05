import {UPLOAD_IMAGE, UPLOAD_POST_FAILED, UPLOAD_POST_REQUESTED, UPLOAD_POST_SUCCESS} from "../../constants"
import {uploadImage, uploadPostFailed, uploadPostRequested, uploadPostSuccess} from "../../actions"

describe('Test ResetPassword action', () => {
    it('should call uploadImage action', () => {
        const data = {
            image: 'sfkjsenfse'
        }
        const expectedActions = {
            type: UPLOAD_IMAGE,
            data
        }
        expect(uploadImage(data)).toEqual(expectedActions)
    })
    it('should call uploadPostRequested action', () => {
        const data = {
            image: 'sfkjsenfse',
            userId: '1',
        }
        const expectedActions = {
            type: UPLOAD_POST_REQUESTED,
            data
        }
        expect(uploadPostRequested(data)).toEqual(expectedActions)
    })
    it('should call uploadPostSuccess action', () => {
        const data = {
            image: 'sfkjsenfse',
            userId: '1',
        }
        const expectedActions = {
            type: UPLOAD_POST_SUCCESS,
            data
        }
        expect(uploadPostSuccess(data)).toEqual(expectedActions)
    })
    it('should call uploadPostFailed action', () => {
        const error = {
            errpr: 'sfkjsenfse',
        }
        const expectedActions = {
            type: UPLOAD_POST_FAILED,
            error
        }
        expect(uploadPostFailed(error)).toEqual(expectedActions)

    })
})
