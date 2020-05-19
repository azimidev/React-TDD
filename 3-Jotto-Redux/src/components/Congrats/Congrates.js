import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Congrates extends Component {
    render() {
        return (
            <div data-test="component-congrates">
                {this.props.success && (
                    <div
                        data-test="congrates-message"
                        className="notification is-primary"
                    >
                        Congradulation! You guessed the word
                    </div>
                )}
            </div>
        )
    }
}

Congrates.propTypes = {
    success: PropTypes.bool.isRequired,
}
