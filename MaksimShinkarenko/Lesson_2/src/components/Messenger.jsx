import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component
{
    state = {
        messages: ['Hi', 'Hello', 'Test message'],
        // messages: [{author: '', text: ''}] //TODO
    };

    handleMessageSend = (message) => {
        //TODO
        this.setState({messages: this.state.messages.concat([message.text])});
    };

    componentDidUpdate(){
        //TODO - через 1 сек. ответ на сообщение, Bot
    }

    render()
    {
        const {messages} = this.state;

        return (
            <>
               <MessageList items={messages} />
               <MessageForm onSend={this.handleMessageSend} />
            </>
            );
    }
}