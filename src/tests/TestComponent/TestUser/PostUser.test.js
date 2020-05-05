import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import PostUser from '../../../components/PostUser/PostUser';

const props = {
    user: {
        'username': 'thiendt',
        'avatar': 'photos/1564985673406.jpeg'
    },
    photos: [
        {
            'id': 1,
            'createdAt': '2019-08-05T06:14:33.415',
            'photoUri': 'photos/1564985673406.jpeg'
        }
    ]
}

describe('Test PostUser in Home', () => {
    let user =  shallow(<PostUser {...props} />)

    it('should Test Snapshot Post User', () => {
        expect(shallowToJson(user)).toMatchSnapshot()
    })

    it('Render class', () => {
        expect(user.find('.post-user')).toHaveLength(1)
        expect(user.find('.post-avatar')).toHaveLength(1)
        expect(user.find('.post-userName')).toHaveLength(1)
        expect(user.find('.post-date')).toHaveLength(1)
    })

})