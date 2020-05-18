import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../../actions'

export class Input extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form>
                <input
                    data-test="input-box"
                    className="input"
                    id="word-guess"
                    type="text"
                    placeholder="enter guess"
                />
                <button
                    data-test="submit-button"
                    className="button is-primary"
                    type="submit"
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

export default connect(mapStateToProps, mapDispatchToProps)(Input)
