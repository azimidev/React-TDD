import React from 'react'
import { shallow } from 'enzyme'
import Input, { UnconnectedInput } from './Input'
import { findByTestAttr, storeFactory } from '../../test/testUtils'

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive()
    return wrapper
}

describe('render the input component', () => {
    describe('word has NOT been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: false }
            const props = { success: false }
            wrapper = setup(initialState, props)
        })
        test('should render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('should render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(1)
        })
        test('should render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(1)
        })
    })

    describe('word has been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: true }
            wrapper = setup(initialState)
        })
        test('should render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('should not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(0)
        })
        test('should not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(0)
        })
    })
})

describe('redux props', () => {
    test('should have success piece of state as prop', () => {
        // Testing mapStateToProps:
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })
    test('should `guessWord ` action creator return a function', () => {
        // Testing mapDispatchToProps:
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        expect(guessWordProp).toBeInstanceOf(Function) // Object
    })
})

describe('`guessWord` action creator call', () => {
    test('should call `guessWord` when button is clicked', () => {
        const guessWordMock = jest.fn()

        const props = { guessWord: guessWordMock }

        const wrapper = shallow(<UnconnectedInput {...props} />)

        const submitButton = findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate('click')

        const guessWordCallCount = guessWordMock.mock.calls.length

        expect(guessWordCallCount).toBe(1)
    })
})
