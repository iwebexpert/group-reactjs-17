import React, {Component} from 'react';
import {MessagesList} from "../MessagesList";
import {MessageForm} from "../MessageForm";
import {nanoid} from 'nanoid';

import {Container, Grid, Typography} from '@material-ui/core';

import './Messenger.scss';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {Link} from "react-router-dom";

import {chats} from '../../helpers/chatData';
import {ChatForm} from "../ChatForm";


export class Messenger extends Component {
    state = {
        chats,
        messages: [
            {text: 'Hi', author: 'WebDev'},
            {text: 'Hello', author: 'WebDev'},
            {text: 'Test message', author: 'WebDev'},
        ]
    };

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        message.id = nanoid();
        chat.messages = this.messages.concat([message])

        chats[match.params.id] = chat;

        this.setState({
            chats,
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.messages.length) {
            const {author} = this.messages[this.messages.length - 1];
            if (author !== 'Бот') {
                setTimeout(() => {
                    const {author} = this.messages[this.messages.length - 1];
                    if (author !== 'Бот') {
                        this.handleMessageSend({text: `Привет, ${author}! Это Бот!`, author: 'Бот'});
                    }
                }, 1000);
            }
        }
    }

    get messages() {
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    handleMessageAddChat() {

    }

    render() {
        const {chats} = this.state;
        const messages = this.messages;
        const chatList = chats.map((item) => (
            <ListItem button key={item.id}>
                <Link to={`/chats/${item.id}`}>
                    <ListItemText primary={item.title}/>
                </Link>
            </ListItem>
        ))

        console.log(messages);

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
                        <ChatForm onSend={this.handleMessageAddChat}/>
                    </Grid>
                    <Grid container direction="column"
                          justify="center"
                          alignItems="center">
                        <div>
                            {messages ? <MessagesList items={messages}/> : <div>Выберите чат слева</div>}
                            {messages && <MessageForm onSend={this.handleMessageSend}/>}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}