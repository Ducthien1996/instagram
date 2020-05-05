import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import SignInForm from '../containers/SignInForm/SignInForm'
import App from '../../src/App';
import SignUp from '../containers/SignUp/SignUp';

// jest.mock('firebase/app');
describe('Test App.js', () => {
  test('path sigin form', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/signin']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(SignInForm)).toHaveLength(1);
  })
})
