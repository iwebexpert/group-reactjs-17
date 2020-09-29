import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';


export class Messenger extends Component
{
    state = {
        messages: [
            {author: 'author1', text:'Hi'},
            {author: 'author2', text:'Hello'},
            {author: 'author3', text:'Test'},
        ],
    };

    handleMessageSend = (message) => {
        this.setState({messages: this.state.messages.concat([{author: message.author, text: message.text}])})
    };

    componentDidUpdate(){

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