import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import PostImage from '../../../components/PostImage/PostImage';

const props = {
    id: 613,
    createdAt: "2019-08-02T02:22:12.686",
    updatedAt: "2019-08-02T02:22:12.686",
    photoUri: "photos/1564712532670.jpeg"
}

describe('Test Component PostImage', () => {
    it('should render PostImage', () => {
        const wrapper = shallow(<PostImage {...props} />)
        it('should Test Post Image', () => {
            expect(shallowToJson(wrapper)).toMatchSnapshot()
        })
        expect(wrapper.find('.post-image').length).toBe(1)
        expect(wrapper.find('.post-thumb').length).toBe(1)
    })
})
