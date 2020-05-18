import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Congrates extends Component {
    render() {
        return (
            <div
                data-test="component-congrates"
                className="notification is-primary"
            >
                {this.props.success && (
                    <span data-test="congrates-message">
                        Congradulation! You guessed the word
                    </span>
                )}
            </div>
        )
    }
}

Congrates.propTypes = {
    success: PropTypes.bool.isRequired,
}
