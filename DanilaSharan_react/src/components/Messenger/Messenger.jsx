import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import {chats} from '../../helpers/chatsData'
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
    state = {
        chats,
    };

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} =this.props;

        const chat = chats[match.params.id]
        message.id = nanoid()
        chat.messages = this.messages.concat([message])

        chats[match.params.id] = chat;

        this.setState({
            chats,
        });


        let body = document.querySelector('.messages-list').lastChild;
        body.scrollIntoView();

    };

    componentDidUpdate() {
        if(this.messages.length) {
            const {author, id} = this.messages[this.messages.length - 1];
            if (author !== 'Bot'){
                setTimeout(() => {
                    if (id === this.messages[this.messages.length - 1].id)
                        this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
                }, 2000);
            }
        }

        let body = document.querySelector('.messages-list').lastChild;
        body.scrollIntoView();
    }

    get messages(){
        const {chats} =this.state;
        const {match} =this.props;

        let messages = 0;

        if(match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    render()
    {
        const {chats} = this.state;
        const messages = this.messages;

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
        console.log(chatsList);
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
                        {messages ? <MessageForm onSend={this.handleMessageSend} /> : <></>}
                    </div>
                </Grid>
            </Grid>
        );
    }
}
