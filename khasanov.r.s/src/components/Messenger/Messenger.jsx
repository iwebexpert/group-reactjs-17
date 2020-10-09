import React, {Component} from 'react';
import {MessagesList} from "../MessagesList";
import {MessageForm} from "../MessageForm";


import {Container, Grid, Typography} from '@material-ui/core';

import './Messenger.scss';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {Link} from "react-router-dom";

import {chats} from '../../helpers/chatData';
import {ChatForm} from "../ChatForm";


export class Messenger extends Component {
    state = {
        chats,
    };

    goTo (chatId) {
        this.props.redirect(chatId);
    }

    render() {
        const {chats, messages, handleMessageSend, handleChatAdd} = this.props;
        console.log('chats', chats);
        const chatList = chats.map((item) => (
            <ListItem button key={item.id}>
                <div onClick={()=>this.goTo(item.id)} key={`div${item.id}`} className={item.fire ? 'fired' : ''}>
                    <ListItemText primary={item.title}/>
                </div>
            </ListItem>
        ))

        return (
            <Container className="messenger">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center">Messenger</Typography>
                        <Link to="/">
                            <ListItem button>
                                <ListItemText primary="Главная"/>
                            </ListItem>
                        </Link>
                        <Link to="/profile">
                            <ListItem button>
                                <ListItemText primary="Профиль"/>
                            </ListItem>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {chatList}
                        </List>
                        <ChatForm onSend={handleChatAdd}/>
                    </Grid>
                    <Grid container direction="column"
                          justify="center"
                          alignItems="center">
                        <div>
                            {messages ? <MessagesList items={messages}/> : <div>Выберите чат слева</div>}
                            {messages && <MessageForm onSend={handleMessageSend}/>}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}