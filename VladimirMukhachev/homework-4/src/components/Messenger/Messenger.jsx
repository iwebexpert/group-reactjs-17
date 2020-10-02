import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Switch, Route, Link} from 'react-router-dom';
import {Grid, Divider, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {NewChat} from "../NewChat";

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

    handleChatAdd = (title) => {
        const {chats} = this.state;

        let chatList = chats.concat([
            {
                id: chats.length,
                title: title,
                messages: [
                    {
                        id: 0,
                        author: 'WebDev',
                        text: `Приветствуем в новом чате ${title}`
                    },
                ]
            }
        ]);

        console.log(chatList);

        this.setState({
            chats: chatList
        });
    }

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
        const {chats} = this.state;
        const messages = this.messages;

        const chatsList = chats.map((item) => (
            <Link to={`/chats/${item.id}`}>
                <ListItem key={item.id}>
                    <ListItemText primary={item.title} />
                </ListItem>
            </Link>

        ));

        //console.log(this.props.match);

        return (
            <>

            <Grid container>            
                <Grid item xs={12} sm={3} className="chatlist">
                    <List component="nav" aria-label="main mailbox folders">
                        {chatsList}
                    </List>
                    <NewChat onSend={this.handleChatAdd}/>
                </Grid>

                <Grid item xs={12} sm={9} className="messenger">
                    <div className="messages-list">
                        {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
                    </div>
                    <Divider />
                    {messages && <MessageForm className="message-form" onSend={this.handleMessageSend} />}
                </Grid>
            </Grid>




            </>
            );
    }
}