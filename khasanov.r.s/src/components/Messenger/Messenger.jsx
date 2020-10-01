import React, {Component} from 'react';
import {MessagesList} from "../MessagesList";
import {MessageForm} from "../MessageForm";

import {Container, Grid, Typography} from '@material-ui/core';

import './Messenger.scss';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export class Messenger extends Component {
    state = {
        messages: [
            {text: 'Hi', author: 'WebDev'},
            {text: 'Hello', author: 'WebDev'},
            {text: 'Test message', author: 'WebDev'},
        ]
    };


    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([{text: message.text, author: message.author}])
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Бот') {
            setTimeout(() => {
                const {author} = this.state.messages[this.state.messages.length - 1];
                if (author !== 'Бот') {
                    this.setState({
                        messages: this.state.messages.concat([{text: `Привет, ${author}! Это Бот!`, author: 'Бот'}])
                    });
                }
            }, 1000);
        }
    }

    render() {
        const {messages} = this.state;
        return (
            <Container className="messenger">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center">Messenger</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Trash"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Spam"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid container xs={10} direction="column"
                          justify="center"
                          alignItems="center">
                        <MessagesList items={messages}/>
                        <MessageForm onSend={this.handleMessageSend}/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}