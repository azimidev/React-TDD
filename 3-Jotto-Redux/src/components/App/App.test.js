import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { storeFactory } from '../../test/testUtils'

const setup = (state = {}) => {
    const store = storeFactory(state)
    const wrapper = shallow(<App store={store} />)
        .dive()
        .dive()
    return wrapper
}

describe('redux properties', () => {
    test('should have access to `success` state', () => {
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })
    test('should have access to `secretWord` state', () => {
        const secretWord = 'pary'
        const wrapper = setup({ secretWord })
        const secretWordProp = wrapper.instance().props.secretWord
        expect(secretWordProp).toBe(secretWord)
    })
    test('should have access to `guessWords` state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
        const wrapper = setup({ guessedWords })
        const guessedWordsProp = wrapper.instance().props.guessedWords
        expect(guessedWordsProp).toBe(guessedWords)
    })
    test('should `getSecretWord` action creator as a function on the props', () => {
        const wrapper = setup()
        const getSecretWordProp = wrapper.instance().props.getSecretWord
        expect(getSecretWordProp).toBeInstanceOf(Function)
    })
})
