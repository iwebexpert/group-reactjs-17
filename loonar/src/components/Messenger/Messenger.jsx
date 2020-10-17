import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Switch, Route, Link} from 'react-router-dom';

import {Grid, List, ListItem, ListItemText} from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PropTypes from 'prop-types';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {AddChatForm} from '../AddChatForm';
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
        const chatList = chats.concat([
            {
                id: chats.length,
                title: title,
                messages: [
                    {
                        id: 0,
                        author: 'New Chat',
                        text: `New chat`
                    },
                ]
            }
        ]);
        this.setState({
            chats: chatList
        });
    }


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

    // get messages(){
    //     const {chats} = this.state;
    //     const {match} = this.props;
    //     let messages = null;
    //     if(match && chats[match.params.id]){
    //         messages = chats[match.params.id].messages;
    //     }
    //     return messages;
    // }

    render()
    {

        const {profile, chats, messages, handleMessageSend, handleChatAdd, isLoading, isError, handleChatsReload} = this.props;
        console.log(profile)
        if(isLoading){
            return (<div>Loading...</div>);
        }

        if(isError){
            return (<div>Error... Попробуйте получить чаты позднее. <button onClick={handleChatsReload}>Обновить чаты</button></div>);
        }

        const chatsList = chats.map((item) => (

        <ListItem key={item.id}>
            <Link to={`/chats/${item.id}`}><ListItemText primary={item.title} /></Link>
        </ListItem>
        ));
        
        return (
            <>
            <Grid item xs={2} className="chatMenu">
                <List  component="nav" aria-label="main mailbox folders">
                    {chatsList}
                    <button onClick={handleChatAdd}>Добавить чат</button>
                    {/* <AddChatForm onSend={this.handleChatAdd}/> */}
                </List>
                </Grid>
                <Grid item xs={8} className="messenger">
                 <div className="messages-list ">
                     {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
                 </div>
                 <div>
                    {messages && <MessageForm onSend={handleMessageSend} profile={profile}/>}
                 </div>
             </Grid>
            </>
            );
    }
}