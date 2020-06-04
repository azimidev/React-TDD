import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../test/testUtils'

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

describe('App components', () => {
  test('should render the App component without any errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1)
  })
})
