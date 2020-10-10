import React, {Component} from 'react';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.scss';
import {Grid} from "@material-ui/core";
import {ChatList} from "components/ChatList";

export class Messenger extends Component {

    render() {
        const {chats, messages, handleMessageSend, handleChatAdd, isLoading, isError, handleChatsReload} = this.props;

        const errorDiv = <div className="error">Ошибка загрузки чатов...
            <button onClick={handleChatsReload}>Обновить</button>
        </div>;

        return (
            <Grid container item spacing={2} className="container-chat">
                <Grid item xs={2}>
                    {isLoading ? <div className="loading">Чаты загружаются</div> : isError ? errorDiv :
                        <ChatList chats={chats} onChatAdd={handleChatAdd}/>}
                </Grid>
                <Grid item xs={10}>
                    <div className="messenger">
                        <div className="messages-list" id="mess-list">
                            {messages ? <MessageList items={messages}/> : <div>Выберите чат слева</div>}
                        </div>
                        {messages && <MessageForm onSend={handleMessageSend}/>}
                    </div>
                </Grid>
            </Grid>
        );
    }
}