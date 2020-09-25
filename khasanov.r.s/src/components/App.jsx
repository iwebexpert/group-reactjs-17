import React, {Component} from 'react';

export class App extends Component {

    state = {
        counter: 0,
    }

    handlerPlusClick = (event) => {
        this.setState({
            counter: this.state.counter + 1,
        })
    };

    handlerMinusClick = (event) => {
        this.setState({
            counter: this.state.counter - 1,
        })
    }
    handlerButtonClick1 = (action) => ()=> {
        this.setState({
            counter: this.state.counter + action,
        })
    }
    handlerButtonClick2 = (event) => {
        const action = +event.target.dataset.action;
        this.setState({
            counter: this.state.counter + action,
        })
    }

    render() {
        const {counter} = this.state;
        return (
            <>
                <h3>App!</h3>
                <p>Counter: {counter}</p>
                <button onClick={this.handlerPlusClick}>+1</button>
                <button onClick={this.handlerMinusClick}>-1</button>
                <hr/>
                <button onClick={this.handlerButtonClick1(1)}>+1</button>
                <button onClick={this.handlerButtonClick1(-1)}>-1</button>
                <hr/>
                <button data-action="1" onClick={this.handlerButtonClick2}>+1</button>
                <button data-action="-1" onClick={this.handlerButtonClick2}>-1</button>
            </>
        )
    }
}