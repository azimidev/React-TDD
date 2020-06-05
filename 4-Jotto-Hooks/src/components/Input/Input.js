import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
  // HOOKS: useState(), useEffect() (React 16.8)
  // WARNING: you can only use hooks inside functional components!
  const [currentGuess, setCurrentGuess] = React.useState('')

  return (
    <div data-test="component-input">
      <from>
        <input
          data-test="input-box"
          className="input"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="button is-primary"
          type="submit"
          onClick={(e) => {
            // todo: update guessedWord
            // todo: check against secretWord and update success if needed
            setCurrentGuess('')
          }}
        >
          Submit
        </button>
      </from>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input
