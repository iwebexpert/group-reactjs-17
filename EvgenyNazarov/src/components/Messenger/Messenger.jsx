import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {ChatList} from "components/ChatList";

import './Messenger.css';

export class Messenger extends Component
{
    // componentDidUpdate(){
    //     if(this.messages.length){
    //         const {author} = this.messages[this.messages.length - 1];
    //         if (author !== 'Bot'){
    //             setTimeout(() => {
    //                 this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
    //             }, 2000);
    //         }
    //     }
    // }
    render()
    {
        const {chats, messages, handleMessageSend} = this.props;

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
                    {messages && <MessageForm onSend={handleMessageSend} />}
                </Grid>
            </Grid>
    </>
            );
    }
}