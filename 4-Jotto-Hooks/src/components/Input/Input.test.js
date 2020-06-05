import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'
import { findByTestAttr, checkProp } from '../../test/testUtils'

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />)
}

describe('Input component and props', () => {
  test('should render the Input component without any erros', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('should not throw warning with expected props', () => {
    checkProp(Input, { secretWord: 'party' })
  })
})

describe('Input component hooks', () => {
  let wrapper
  let mockSetCurrentGuess = jest.fn() // --> function mock

  beforeEach(() => {
    mockSetCurrentGuess.mockClear() // --> resets mock
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]) // --> useState mock
    wrapper = setup()
  })

  test('should update state with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    const mockEvent = {
      target: { value: 'train' },
    } // --> event mock
    inputBox.simulate('change', mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('should clear the field upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click')
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })

  test.todo('add should be associative')
})
