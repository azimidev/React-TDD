import React, { Component } from 'react'
import Congrates from '../Congrats/Congrates'
import GuessedWords from '../GuessedWords/GuessedWords'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Jotto</h1>
                <Congrates success={true} />
                <GuessedWords
                    guessedWords={[
                        { guessedWord: 'train', letterMatchCount: 3 },
                    ]}
                />
            </div>
        )
    }
}
