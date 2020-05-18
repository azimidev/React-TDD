import { getLetterMatchCount } from './'

describe('getLetterMatchCount', () => {
    const secretWord = 'party'

    test('should return count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })

    test('should return the correct count where there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('should return correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('perka', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})
