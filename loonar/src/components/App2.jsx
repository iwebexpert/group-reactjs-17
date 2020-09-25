import React, {Component} from 'react';

import {Counter} from './Counter';

export class App2 extends Component
{
    state = {
        isVisible: false,
    };

    handleToggle = () => {
        this.setState({isVisible: !this.state.isVisible});
    };

    render()
    {
        const {isVisible} = this.state;

        return (
            <>
                <h3>Counter 1</h3>
                {isVisible && <Counter />}
                <hr/>
                <h3>Counter 2</h3>
                {isVisible ? <Counter /> : <div>Counter скрыт</div>}
                <button onClick={this.handleToggle}>Показать/скрыть компонент</button>
            </>
            );
    }
}