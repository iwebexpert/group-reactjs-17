import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.scss';

export class Messenger extends Component {

    handleMessageSend = (message) => {
        const {chats, match} = this.props;

        const chat = chats[match.params.id];
        message.id = nanoid();
        chat.messages = this.messages.concat([message])

        chats[match.params.id] = chat;

        this.props.onMessage({
            chats,
        });
    };

    componentDidUpdate() {
        if (this.props.match.url.includes('chats')) { //без этой проверки ошибка
            const {author, id} = this.messages[this.messages.length - 1];
            if (author !== 'Bot') {
                setTimeout(() => {
                    if (id === this.messages[this.messages.length - 1].id)
                        this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
                }, 2000);
            }
        }
    }

    get messages() {
        const {match, chats} = this.props;

        let messages = null;

        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render() {
        const messages = this.messages;

        return (
            <div className="messenger">
                <div className="messages-list" id="mess-list">
                    {messages ? <MessageList items={messages}/> : <div>Выберите чат слева</div>}
                </div>
                {messages && <MessageForm onSend={this.handleMessageSend}/>}
            </div>
        );
    }
}