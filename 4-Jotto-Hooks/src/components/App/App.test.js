import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import { findByTestAttr } from '../../test/testUtils'
import hookActions from '../../actions/hookActions'

const mockGetSecretWord = jest.fn()

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

  const mockUserReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()])

  React.useReducer = mockUserReducer

  // NOTE: `useEffect` works on `mount` and not `shallow`
  // SEE: https://github.com/enzymejs/enzyme/issues/2086
  return mount(<App />)
}

describe('App components', () => {
  test('should render the App component without any errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1)
  })

  test('should getSecretWord get called on App mount', () => {
    setup()
    expect(mockGetSecretWord).toHaveBeenCalled()
  })

  test('should not update the secretWord on App update', () => {
    const wrapper = setup()
    mockGetSecretWord.mockClear()

    // NOTE: wrapper.update() doesn not trigger update
    // SEE: https://github.com/enzymejs/enzyme/issues/2091
    wrapper.setProps()

    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})

describe('App component - secretWord IS NOT null', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup('party')
  })

  test('should render app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.exists()).toBe(true)
  })

  test('should not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner')
    expect(spinnerComponent.exists()).toBe(false)
  })
})

describe('App component - secretWord IS null', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup(null)
  })

  test('should render app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.exists()).toBe(false)
  })

  test('should not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner')
    expect(spinnerComponent.exists()).toBe(true)
  })
})
