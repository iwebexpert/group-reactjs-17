import React, {Component} from 'react';
import {nanoid} from 'nanoid';


import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.css';
import {Grid} from "@material-ui/core";
import {ChatList} from "../ChatList";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import {ArrowBackIos} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

export class Messenger extends Component
{
    render()
    {
        const {
            chats,
            messages,
            username,
            handleMessageSend,
            handleChatAdd,
            handleChatOpen,
            handleChatsReload,
            isLoading,
            isError
        } = this.props;

        if(isLoading){
            return (<div>Loading...</div>)
        }

        if(isError){
            return (<div>Error... Попробуйте полчить чаты позднее. <Button onClick={handleChatsReload}>Обновить чаты</Button></div>)
        }


        const chatsList = chats.map((item) => (
            <ListItem
              key={nanoid()}
              button
              onClick={() => handleChatOpen(item)}
              style={{
                backgroundColor: item.unread ? '#3b2666' : ''
              }}
            >
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <Link className="list-item-text" to={`/chats/${item.id}`}>{item.title}</Link>
            </ListItem>
        ));

        return (
            <Grid container spacing={1}>
                <ChatList chatsList={chatsList} handleChatAdd={handleChatAdd} className='list-item-padding' />
                <Grid item xs={9} className="messenger">
                    <div className="main-container-msg">
                        <div className="content-wrapper">
                            <div className="overflow-container">
                                <div className="overflow-content" id="mess-list">
                                    <div className="messages-list">
                                        {messages ? <MessageList items={messages} /> : <div className="choose-your-destiny"><ArrowBackIos />Выберите чат из списка слева</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {messages ? <MessageForm username={username} onSend={handleMessageSend} /> : <></>}
                    </div>
                </Grid>
            </Grid>
        );
    }
}
