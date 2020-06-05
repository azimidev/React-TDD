import React from 'react'
import hookActions from '../../actions/hookActions'
import Input from '../Input/Input'

const initialState = { secretWord: '' }

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord })
  }

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
  )
}

export default App
