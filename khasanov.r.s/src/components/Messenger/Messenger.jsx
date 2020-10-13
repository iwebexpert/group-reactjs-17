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
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


export class Messenger extends Component {
    state = {
        chats,
    };

    goTo(chatId) {
        this.props.redirect(chatId);
    }

    render() {
        const {profile, chats, messages, handleMessageSend, handleChatAdd, isLoading, isError, handleChatReload} = this.props;

        if (isLoading) {
            return (<div>Loading...</div>);
        }
        if (isError) {
            return (<div>Error. Попробуйте позднее. <button onClick={handleChatReload}>Обновить</button></div>);
        }

        const chatList = chats.map((item) => (
            <ListItem button key={item.id}>
                <div onClick={() => this.goTo(item.id)} key={`div${item.id}`} className={item.fire ? 'fired' : ''}>
                    <ListItemText primary={item.title}/>
                </div>
            </ListItem>
        ))

        return (
            <Container className="messenger">
                <Grid container spacing={3}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" style={{marginRight: '10px'}} color="inherit" aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" style={{flexGrow: 1}}>
                                Messenger
                            </Typography>
                            <Link to="/profile">
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle style={{color: "white"}}/>
                                </IconButton>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Grid item xs={3}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {chatList}
                        </List>
                        <ChatForm onSend={handleChatAdd}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container direction="column"
                              justify="center"
                              alignItems="center">
                            <div>
                                {messages ? <MessagesList items={messages}/> : <div>Выберите чат слева</div>}
                                {messages && <MessageForm onSend={handleMessageSend} profile={profile}/>}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}