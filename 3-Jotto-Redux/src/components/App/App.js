import React, { Component } from 'react'
import Congrates from '../Congrats/Congrates'
import GuessedWords from '../GuessedWords/GuessedWords'
import { connect } from 'react-redux'
import { getSecretWord } from '../../actions'
import Input from '../Input/Input'

export class UnconnectedApp extends Component {
    componentDidMount() {
        this.props.getSecretWord()
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Jotto</h1>
                <Congrates success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord,
})

const mapDispatchToProps = { getSecretWord }

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp)
