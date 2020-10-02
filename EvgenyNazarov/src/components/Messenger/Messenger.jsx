import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Grid} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {ChatList} from "components/ChatList";

import {chats} from '../../helpers/chatsData';
import './Messenger.css';

export class Messenger extends Component
{
    state = {
        chats,
    };

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        message.id = nanoid();
        chat.messages = this.messages.concat([message])

        console.log(message, chat);

        chats[match.params.id] = chat;

        this.setState({
            chats,
        });
    };

    componentDidUpdate(){
        if(this.messages.length){
            const {author} = this.messages[this.messages.length - 1];
            if (author !== 'Bot'){
                setTimeout(() => {
                    this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
                }, 2000);
            }
        }
    }

    get messages(){
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    render()
    {
        console.log(this.state);
        const messages = this.messages;

        return (
            <>
            <Grid container wrap="nowrap"  className={"mainContent"}>
                <Grid item xs={12} sm={3} className={"chatList"}>
                    <ChatList/>
                </Grid>
                <Grid item xs={12} sm={9} className="messenger">
                    <div className="messages-list">
                        {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
                    </div>
                    {messages && <MessageForm onSend={this.handleMessageSend} />}
                </Grid>
            </Grid>
    </>
            );
    }
}