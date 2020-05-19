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
    let wrapper
    let guessedWord = 'train'
    let guessWordMock
    beforeEach(() => {
        // setup mock for `guessWord`
        guessWordMock = jest.fn()

        wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />)
        wrapper.setState({ currentGuess: guessedWord })
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate('click', { preventDefault() {} })
    })

    test('should call `guessWord` when button is clicked', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length
        expect(guessWordCallCount).toBe(1)
    })

    test('should call `guessWord` with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0]
        expect(guessWordArg).toBe(guessedWord)
    })

    test('should clear the input box on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('')
    })
})
