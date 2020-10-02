import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.css';

export class Messenger extends Component
{
    state = {
        messages: [
            {author: 'author1', text:'Hi', id: nanoid()},
            {author: 'author2', text:'Hello', id: nanoid()},
            {author: 'author3', text:'Test', id: nanoid()},
        ],
    };

    handleMessageSend = (message) => {
        message.id = nanoid();
        this.setState({messages: this.state.messages.concat([{author: message.author, text: message.text, id: message.id}])})
    };

    componentDidUpdate(){
        const {author, id} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot'){
            setTimeout(() => {
                if(id === this.state.messages[this.state.messages.length - 1].id){
                    this.handleMessageSend({author: 'Bot', text: `Hi, ${author}! Это бот...`})
                }
            }, 2000);   
        }
    };

    render()
    {
        const {messages} = this.state;

        return (
            <div className="messenger">
                <div className="messages-list">
                    <MessageList items={messages}/>
                </div>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        );
    }
}