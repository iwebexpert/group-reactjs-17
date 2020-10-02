import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component {
  state = {
    messages: [
      {author: 'Bot', text: 'Hi'},
      {author: 'Bot', text: 'Hello'},
      {author: 'Bot', text: 'Salute'},
      ]
  };

  handleMessageSend = (message) => {
      this.setState({messages: [...this.state.messages, {author: message.author, text: message.text}]});
  };

  componentDidUpdate() {
    const message = this.state.messages[this.state.messages.length - 1];

    if(message.author !== 'Bot') {
      setTimeout(() => {
        this.setState({messages: [...this.state.messages, {author: 'Bot', text: 'test'}]});
      }, 1000)
    }
  }

  render() {
    const {messages} = this.state;

    return (
      <>
        <MessageList items={messages}/>
        <MessageForm onSend={this.handleMessageSend}/>
      </>
    );
  }
}