import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.scss';

export class Messenger extends Component
{
    state = {
        messages: [
            {author: 'WebDev', text: 'Hi', id: nanoid()},
        ],
    };

    handleMessageSend = (message) => {
        message.id = nanoid();
        this.setState({messages: this.state.messages.concat([message])});
    };

    componentDidUpdate(){
        const {author, id} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot'){
            setTimeout(() => {
                if (id === this.state.messages[this.state.messages.length - 1].id)
                    this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
            }, 2000);
        }
    }

    render()
    {
        const {messages} = this.state;

        return (
            <div className="messenger">
                <div className="messages-list" id="mess-list">
                    <MessageList items={messages} />
                </div>
               <MessageForm onSend={this.handleMessageSend} />
            </div>
            );
    }
}