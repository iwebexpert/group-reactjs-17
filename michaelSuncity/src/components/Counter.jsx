import React, {Component} from 'react';

export class Counter extends Component
{
    state = {
        counter: 0,
    };

    timer = null;

    handleButtonClick = (event) => {
        const action  = +event.target.dataset.action;

        this.setState({
            counter: this.state.counter + action,
        });
    }

    componentDidMount(){
        console.log('3. componentDidMount()');

        this.timer = setInterval(() => {
            console.log('Get data...');
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate()', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount()');
        clearInterval(this.timer);
    }

    
    render()
    {
        const {counter} = this.state;

        return (
            <>
                <h3>Counter component!</h3>
                <p>Counter: {counter}</p>
                <button data-action="1" onClick={this.handleButtonClick}>+1</button>
                <button data-action="-1" onClick={this.handleButtonClick}>-1</button>
            </>
        );
    }
}