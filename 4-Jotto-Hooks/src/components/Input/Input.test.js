import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'
import { findByTestAttr, checkProp } from '../../test/testUtils'

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />)
}

describe('Input component', () => {
  test('should render the Input component without any erros', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('should not throw warning with expected props', () => {
    checkProp(Input, { secretWord: 'party' })
  })

  test('should update state with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn() // --> function mock
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]) // --> useState mock

    const wrapper = setup()
    const inputBox = findByTestAttr(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' } } // --> event mock
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })
})
