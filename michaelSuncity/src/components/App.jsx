import React, { Component } from 'react';

export class App extends Component 
{

    constructor(props){
        super(props);

       /* this.state = {
          counter: 0,  
        };

        this.handlePlusClick = this.handlePlusClick.bind(this);*/
        console.log('1. constructor()');
    }

    state = {
        counter: 0,
    };

    handlePlusClick = (event) => {
        console.log(this);

        this.setState({
            counter: this.state.counter + 1,
        });
    }

    handleMinusClick = (event) => {

        this.setState({
            counter: this.state.counter - 1,
        });
    }

    handleButtonClick = (action) => () => {

        this.setState({
            counter: this.state.counter + action,
        });
    }

    handleButtonClick2 = (event) => {
        const action  = +event.target.dataset.action;

        this.setState({
            counter: this.state.counter + action,
        });
    }

    componentDidMount(){
        console.log('3. componentDidMount()');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate()', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount()');
    }

    render()
    {
        console.log('2. render()');

        const {counter} = this.state;

        return (
            <>
                <h3>App!</h3>
                <p>Counter: {counter}</p>
                <button onClick={this.handlePlusClick}>+1</button>
                <button onClick={this.handleMinusClick}>-1</button>
                <hr/>
                <button onClick={this.handleButtonClick(1)}>+1</button>
                <button onClick={this.handleButtonClick(-1)}>-1</button>
                <hr/>
                <button data-action="1" onClick={this.handleButtonClick2}>+1</button>
                <button data-action="-1" onClick={this.handleButtonClick2}>-1</button>
            </>
        );
    }
}