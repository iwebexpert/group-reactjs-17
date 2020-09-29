import React, {Component} from 'react';

import {MessageList} from './MessageList';

export class Messenger extends Component
{
    state = {
        messages: ['Hi', 'Hello', 'Test message'],
    };

    handleToggle = () => {

    };

    render()
    {
        const {messages} = this.state;

        return (
            <>
                <MessageList items={messages}/>
            </>
        );
    }
}