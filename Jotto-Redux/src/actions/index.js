import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from './types'
import { getLetterMatchCount } from '../helpers'
import Axios from 'axios'

export const guessWord = (guessedWord) => {
    return function (dispatch, getState) {
        const secretWord = getState().secretWord
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

        dispatch({
            type: GUESS_WORD,
            payload: { guessedWord, letterMatchCount },
        })

        if (guessedWord === secretWord) {
            dispatch({ type: CORRECT_GUESS })
        }
    }
}

export const getSecretWord = () => async (dispatch) => {
    const { data } = await Axios.get('http://localhost:3030')
    dispatch({
        type: SET_SECRET_WORD,
        payload: data,
    })
}
