import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  static propTypes = {
    secretWord: PropTypes.string.isRequired,
  }

  render() {
    return <div data-test="component-input"></div>
  }
}

export default Input
