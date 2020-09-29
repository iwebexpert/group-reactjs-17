import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Grid} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.css';

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
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot'){
            setTimeout(() => {
                this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
            }, 2000);
        }
    }

    render()
    {
        const {messages} = this.state;

        return (
            <div className="messenger">
                <div className="messages-list ">
                    <MessageList items={messages} />
                </div>
                <Grid item xs={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <MessageForm onSend={this.handleMessageSend} />
                </Grid>
            </div>
            );
    }
}