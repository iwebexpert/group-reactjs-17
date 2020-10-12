import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {ChatList} from "components/ChatList";

import './Messenger.css';

export class Messenger extends Component
{
    render()
    {
        const {chats, messages, handleMessageSend, handleChatAdd, isLoading, isError, handleChatsReload} = this.props;

        if(isLoading){
            return (<div>Loading...</div>);
        }

        if(isError){
            return (<div>Error... Попробуйте получить чаты позднее. <button onClick={handleChatsReload}>Обновить чаты</button></div>);
        }

        return (
            <>
            <Grid container wrap="nowrap"  className={"mainContent"}>
                <button onClick={handleChatAdd}>Добавить чат</button>
                <Grid item xs={12} sm={3} className={"chatList"}>
                    <ChatList chats={chats}/>
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