import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import Grid from "@material-ui/core/Grid";

import {ChatList} from "../ChatList";
import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import {chats} from '../../helpers/chatsData';

import './Messenger.scss';

export class Messenger extends Component {
  state = {
    chats,
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

  componentDidUpdate() {
    if (this.messages.length) {
      setTimeout(() => {
        const {author} = this.messages[this.messages.length - 1];
        if (author !== 'Bot') {
          this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
        }
      }, 1000);
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

  render() {
    const messages = this.messages;

    return (
      <>
        <Grid container spacing={1}>
          <ChatList/>
          <Grid item xs={9} className="messenger">
            <div className="messages-list">
              {messages ? <MessageList items={messages}/> : <div>Выберите чат слева</div>}
            </div>
            {messages && <MessageForm onSend={this.handleMessageSend}/>}
          </Grid>
        </Grid>
      </>
    );
  }
}