import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)

  if (state) wrapper.setState(state)

  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

const wrapper = setup();

describe('App component', () => {

  test('it should render the app component', () => {
    expect(wrapper).toBeTruthy()
  });

  test('should render app component', () => {
    const appComponent = findByTestAttr(wrapper, 'app')
    expect(appComponent.length).toBe(1)
  })

  test('should render increment button', () => {
    const incrementBtn = findByTestAttr(wrapper, 'increment')
    expect(incrementBtn.length).toBe(1)
  })

  test('should render decrement button', () => {
    const decrementBtn = findByTestAttr(wrapper, 'decrement')
    expect(decrementBtn.length).toBe(1)
  })

  test('counter start at 0', () => {
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
  })

  test('increment button should work', () => {
    const counter = 7;
    const app = setup(null, { counter })

    const btn = findByTestAttr(app, 'increment');
    btn.simulate('click')

    const counterDisplay = findByTestAttr(app, 'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
  });

  test('decrement button should work', () => {
    const counter = 5;
    const app = setup(null, { counter })

    const btn = findByTestAttr(app, 'decrement');
    btn.simulate('click')

    const counterDisplay = findByTestAttr(app, 'counter-display')
    expect(counterDisplay.text()).toContain(counter - 1)
  });

});
