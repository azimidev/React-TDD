import React from 'react'
import Congrates from './Congrates'
import { shallow } from "enzyme"
import { findByTestAttr, checkProp } from "../../test/testUtils"

const defaultProps = { success: false }

const setup = (props = {}, state = null) => {
	const setupProps = { ...defaultProps, ...props }
	const wrapper = shallow(<Congrates {...setupProps} />)
	if (state) wrapper.setState(state)
	return wrapper
}

describe('Congrates Component', () => {
	test('should render the congrates component', () => {
		const wrapper = setup()
		const component = findByTestAttr(wrapper, 'component-congrates')
		expect(component.length).toBe(1)
	})

	test('shoud render no text when `success` prop is false', () => {
		const wrapper = setup()
		const component = findByTestAttr(wrapper, 'component-congrates')
		expect(component.text()).toBe('')
	})

	test('should render non-empty congrates message when `success` props is true', () => {
		const wrapper = setup({ success: true })
		const component = findByTestAttr(wrapper, 'congrates-message')
		expect(component.text().length).not.toBe(0)
	});

	test('should not throw warning with expected props', () => {
		const expectedProps = { success: false }
		checkProp(Congrates, expectedProps)
	});

})
