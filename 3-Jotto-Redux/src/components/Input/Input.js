import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../../actions'

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props)
        this.state = { currentGuess: null }
    }

    submitGuessedWord = (e) => {
        e.preventDefault()
        const guessedWord = this.state.currentGuess

        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord)
        }
    }

    render() {
        const contents =
            this.props.success || this.props.gaveUp ? null : (
                <form>
                    <input
                        data-test="input-box"
                        className="input"
                        id="word-guess"
                        type="text"
                        placeholder="enter guess"
                        value={this.state.currentGuess}
                        onChange={(e) =>
                            this.setState({ currentGuess: e.target.value })
                        }
                    />
                    <button
                        data-test="submit-button"
                        className="button is-primary"
                        type="submit"
                        onClick={(e) => this.submitGuessedWord(e)}
                    >
                        Submit
                    </button>
                </form>
            )
        return <div data-test="component-input">{contents}</div>
    }
}

const mapStateToProps = ({ success }) => ({ success })

const mapDispatchToProps = { guessWord }

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput)
