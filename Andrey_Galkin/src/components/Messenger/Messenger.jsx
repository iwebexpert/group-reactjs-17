import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import Grid from "@material-ui/core/Grid";


import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

import './Messenger.scss';

export class Messenger extends Component {
  state = {
    messages: [
      {author: 'Bot', text: 'Hi', id: nanoid()},
      {author: 'Bot', text: 'Hello', id: nanoid()},
      {author: 'Bot', text: 'Salute', id: nanoid()},
    ]
  };

  handleMessageSend = (message) => {
    message.id = nanoid();
    this.setState({messages: [...this.state.messages, {author: message.author, text: message.text}]});
  };

  componentDidUpdate() {
    setTimeout(() => {
      const message = this.state.messages[this.state.messages.length - 1];

      if (message.author !== 'Bot') {
        this.handleMessageSend({author: 'Bot', text: 'test', id: nanoid()});
      }
    }, 3000)
  }

  render() {
    const {messages} = this.state;

    return (
      <Grid item xs={9} className="messenger">
        <div className="messages-list">
          <MessageList items={messages}/>
        </div>
        <MessageForm onSend={this.handleMessageSend}/>
      </Grid>
    );
  }
}