import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import PostTitle from '../../../components/PostTitle/PostTitle';

const props = {
    content : 'test'
}

describe('Test PostTitle in Home', () => {
    let title = shallow(<PostTitle {...props} />)
    
    it('should Test Post Title', () => {
        expect(shallowToJson(title)).toMatchSnapshot()
    })

    it('should Test props render', () => {
        expect(title.find('p')).toHaveLength(1)
    })

    it('Pass content  props to component', () => {
        const title = shallow(<PostTitle {...props} />)
        const content = 'test'
        expect(title.find('p').text()).toEqual(content)
    })

    it('Pass content  props not content', () => {
        const title = shallow(<PostTitle />)
        const result = ""
        expect(title.find('p').text()).toEqual(result)
    })
})