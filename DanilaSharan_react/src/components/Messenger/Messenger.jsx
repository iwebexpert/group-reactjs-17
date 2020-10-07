import React, {Component} from 'react';


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

export class Messenger extends Component
{
    // componentDidUpdate() {
    //     if(this.messages.length) {
    //         const {author, id} = this.messages[this.messages.length - 1];
    //         if (author !== 'Bot'){
    //             setTimeout(() => {
    //                 if (id === this.messages[this.messages.length - 1].id)
    //                     this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
    //             }, 2000);
    //         }
    //     }
    //
    //     let body = document.querySelector('.messages-list').lastChild;
    //     body.scrollIntoView();
    // }

    render()
    {
        const {chats, messages, username, handleMessageSend} = this.props;

        const chatsList = chats.map((item) => (
            <ListItem key={item.id} button>
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
                <ChatList chatsList={chatsList}/>
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
