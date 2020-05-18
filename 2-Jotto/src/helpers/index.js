export function getLetterMatchCount(guessedWord, secretWord) {
	const secretLetterSet = new Set(secretWord.split(''))
	const guessedLetterSet = new Set(guessedWord.split(''))

	// because guessedLetterSet is a SET
	// to transfer a Set to an Array we use:
	// [...set]
	return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}
