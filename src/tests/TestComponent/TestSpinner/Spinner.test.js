import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Spinner from '../../../components/Spinner/Spinner'

describe('Test Spinner', () => {
    it('Should show matchSnapshot', () => {
        const spinner = shallow(<Spinner />)
        expect(shallowToJson(spinner)).toMatchSnapshot()
    })
})