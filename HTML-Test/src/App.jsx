import React, { Component } from "react";

export default class App extends Component {
    state = { counter: 0 };

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        return (
            <div data-test="app">
                <h1 data-test="counter-display">{this.state.counter}</h1>
                <br />
                <button data-test="decrement" onClick={this.decrement}>
                    Decrement
                </button>
                <button data-test="increment" onClick={this.increment}>
                    Increment
                </button>
            </div>
        );
    }
}
