import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {Switch, Route, Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import './Messenger.css';
import {chats} from '../../helpers/chatsData';

export class Messenger extends Component
{
   /* state = {
        chats,
    };*/
/*
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
*/
/*
    componentDidUpdate(){
        if(this.messages.length){
            const {author, id} = this.state.messages[this.state.messages.length - 1];
            if (author !== 'Bot'){
                setTimeout(() => {
                    if(id === this.state.messages[this.state.messages.length - 1].id){
                        this.handleMessageSend({author: 'Bot', text: `Hi, ${author}! Это бот...`})
                    }
                }, 2000);   
            }
        }
    };
    */
/*
    get messages(){
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }
*/
    render()
    {
        const {messages, handleMessageSend} = this.props;
   

        return (
        <div>
            <div className="messenger">
                 <div className="messages-list ">
                     {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
                 </div>
                 {messages && <MessageForm onSend={handleMessageSend} />}
             </div>
        </div>
        );
    }
}