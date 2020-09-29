import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {Grid, Divider} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {ChatList} from '../ChatList';
import {Header} from '../Header';

import './Messenger.css';

export class Messenger extends Component
{
    state = {
        messages: [
            {author: 'WebDev', text: 'Hi', id: nanoid()},
        ],
        
    };

    botAnswersBuffer = [];

    handleMessageSend = (message) => {
        message.id = nanoid();
        this.setState({messages: this.state.messages.concat([message])});
    };

    componentDidUpdate(){
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot') {
            this.botAnswersBuffer.push([`Hi, ${author}!`]);
            // console.log("this.botAnswersBuffer: ",this.botAnswersBuffer);
            setTimeout(() => {
                if (this.botAnswersBuffer.length > 0) {
                    this.handleMessageSend({text: this.botAnswersBuffer.join(" "), author: 'Bot'});
                    this.botAnswersBuffer = [];
                }
            }, 3000);
        }
    }

    render()
    {
        const {messages} = this.state;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
            
                <Grid item xs={12} sm={3} className="chatlist">
                    <ChatList/>
                </Grid>

                <Grid item xs={12} sm={9} className="messenger">
                    <div className="messages-list">
                        <MessageList items={messages} />
                    </div>
                    <Divider />
                    <MessageForm 
                        className="message-form" 
                        onSend={this.handleMessageSend}
                    />
                </Grid>
            </Grid>
            );
    }
}