import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component
{
    state = {
        messages: [
            { author: 'default', text: 'Hi'},
            { author: 'default', text: 'Hello'},
            { author: 'default', text: 'Test message'},
        ],
    };

    handleMessageSend = (message) => {
        this.setState({messages: this.state.messages.concat([{author: message.author, text: message.text}])});
    };

    answerBot = (lastAuthorName) => {
        this.setState({messages: this.state.messages.concat([{author: 'Bot', text: lastAuthorName + ', спасибо'}])});
    };

    componentDidUpdate(){
        let lastAuthorName = this.state.messages[this.state.messages.length - 1].author
        if (lastAuthorName !== 'Bot') //костыль...
            setTimeout(() => this.answerBot(lastAuthorName), 1000);
    };

    render()
    {
        const {messages} = this.state;

        return (
            <>
               <MessageList items={messages} />
               <MessageForm onSend={this.handleMessageSend} />
            </>
            );
    };
}