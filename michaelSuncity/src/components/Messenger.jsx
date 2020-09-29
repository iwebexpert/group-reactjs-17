import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';


export class Messenger extends Component
{
    state = {
        messages: ['Hi', 'Hello', 'Test message'],
    };

    handleMessageSend = (message) => {
        this.setState({messages: this.state.messages.concat([message.text])})
    };

    render()
    {
        const {messages} = this.state;

        return (
            <>
                <MessageList items={messages}/>
                <MessageForm onSend={this.handleMessageSend}/>
            </>
        );
    }
}