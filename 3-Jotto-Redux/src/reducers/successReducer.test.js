import successReducer from './successReducer'
import { CORRECT_GUESS } from '../actions/types'

describe('Success Reducer', () => {
    test('should return default initial state of `false` when no action is passed', () => {
        const newState = successReducer()
        expect(newState).toBe(false)
    })

    test('should return state of `true` upon receiving an action of type `CORRECT_GUESS`', () => {
        const newState = successReducer(undefined, { type: CORRECT_GUESS })
        expect(newState).toBe(true)
    })
})
