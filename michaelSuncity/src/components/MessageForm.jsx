import React, {Component} from 'react';

export class MessageForm extends Component
{
    state = {
        messagesData: ['Hi', 'Hello', 'Test message'],
    };

    handleToggle = () => {

    };

    render()
    {
        const {messages} = this.state;

        return (
            <>

            </>
        );
    }
}