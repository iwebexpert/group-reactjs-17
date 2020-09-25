import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component {
    state = {
        messages: [
            {
                author: 'WebDev',
                text: 'Hi'
            },
            {
                author: 'WebDev2',
                text: 'Hello'
            },
            {
                author: 'WebDev',
                text: 'Test message'
            },
        ],
    };

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    };

    botSayHi = (author) => {
        this.setState({
            messages: this.state.messages.concat({
                author: 'Bot',
                text: 'Привет '+author
            })
        });
    };

    componentDidUpdate(){
        let lastMessage = this.state.messages[this.state.messages.length-1];
        if(lastMessage.text == 'привет бот' || lastMessage.text == 'Привет бот' || lastMessage.text == 'Привет Бот'){
            setTimeout(this.botSayHi, 1000, lastMessage.author
            );
        }
    }

    render(){
        const {messages} = this.state;

        return (
            <>
                <MessageList items={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </>
        );
    };
}