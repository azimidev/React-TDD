import React from 'react'
import GuessedWords from './GuessedWords'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../test/testUtils'

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

describe('GuessedWords Component', () => {
    test('should not throw warning with expected props', () => {
        checkProps(GuessedWords, defaultProps)
    })
})

// integration testing
describe('if there are NO words guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] })
    })

    // feature testing
    test('should renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    // feature testing
    test('should rednder instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})

// integration testing
describe('if there are words guessed', () => {
    let guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ]
    let wrapper
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })

    // feature testing
    test('should render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    // feature testing
    test('should render "guessed words" section', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNodes.length).toBe(1)
    })

    // feature testing
    test('should correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    })
})
