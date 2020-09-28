import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Paper, Grid} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {ChatList} from "components/ChatList";

import './Messenger.css';


export class Messenger extends Component
{
    state = {
        messages: [
            {author: 'God', text: 'Let there be light!', id: nanoid()},
            {author: 'Galileo', text: 'Eppur si muove!', id: nanoid()},
            {author: 'Che Guevara', text: 'No pasaran!', id: nanoid()},
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
            <Grid container wrap="nowrap"  className={"mainContent"}>
                <Grid item xs={12} sm={3} className={"chatList"}>
                    <ChatList/>
                </Grid>
                <Grid item xs={12} sm={9} className="messenger">
                    <div className="messages-list ">
                        <MessageList items={messages} />
                    </div>
                    <MessageForm onSend={this.handleMessageSend}/>
                </Grid>
            </Grid>

            );
    }
}