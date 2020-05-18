import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

// We don'e need this now but if you do please uncomment:
// import { findByTestAttr } from "../../test/testUtils"

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

describe('App components', () => {
    test('should render the App component', () => {
        const wrapper = setup()
        expect(wrapper).toBeTruthy()
    })
})
