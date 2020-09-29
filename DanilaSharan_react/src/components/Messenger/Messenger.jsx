import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.css';
import {Grid} from "@material-ui/core";

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
        let body = document.querySelector('.messages-list').lastChild;
        body.scrollIntoView();

    };

    componentDidUpdate() {
        const {author, id} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot'){
            setTimeout(() => {
                if (id === this.state.messages[this.state.messages.length - 1].id)
                    this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
            }, 2000);
        }
        let body = document.querySelector('.messages-list').lastChild;
        body.scrollIntoView();
    }

    render()
    {
        const {messages} = this.state;

        return (
            <Grid item xs={9} className="messenger">
                <div className="main-container-msg">
                    <div className="content-wrapper">
                        <div className="overflow-container">
                            <div className="overflow-content" id="mess-list">
                                <div className="messages-list">
                                    <MessageList items={messages} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <MessageForm onSend={this.handleMessageSend} />
                </div>
            </Grid>
            );
    }
}
