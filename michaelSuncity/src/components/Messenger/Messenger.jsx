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