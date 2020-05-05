import React from 'react'
import { shallow } from 'enzyme'
import  Header  from '../../../components/Header/Header'

describe('Test Header', () => {
    it('should render Hearder , logo, solgan', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('.header').length).toBe(1)
        expect(wrapper.find('.logo').length).toBe(1)
        expect(wrapper.find('.slogan').length).toBe(1)
        expect(wrapper.find('.slogan').at(0).text()).toBe('Heaven in your hands');
    })
})
