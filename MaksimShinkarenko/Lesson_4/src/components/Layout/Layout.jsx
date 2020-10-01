import React, {Component} from "react";
import {Grid} from '@material-ui/core';


import {Messenger} from "../Messenger";
import {ChatList} from '../ChatList';
import {Header} from '../Header';

import './Layout.scss';
import {chats} from "../../helpers/chatsData";

export class Layout extends Component {
    state = {
        chats,
    };

    onMessage = data => {
        this.setState({chats: data.chats})
    };

    onChatAdd = data => {
        this.setState({chats: data.chats})
    };

    render() {
        return (
            <Grid container direction='column' className='layout' spacing={2}>
                <Grid item>
                <Header/>
                </Grid>
                <Grid container item spacing={2} className="container-chat">
                    <Grid item xs={2}>
                        <ChatList  chats={this.state.chats} onChatAdd={this.onChatAdd}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Messenger match={this.props.match} chats={this.state.chats} onMessage={this.onMessage}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}