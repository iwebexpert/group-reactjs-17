import React, {Component} from 'react';

import {MessageList} from './MessageList';
import {MessageForm} from './MessageForm';

export class Messenger extends Component {
  state = {
    messages: [{author: 'Tom', text: 'bla-bla'}]
  };

  handleMessageSend = (message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {author: message.author, text: message.text}
      ]
    });
  };

  componentDidUpdate(message) {
    const lastMessage = this.state.messages.slice(-1)[0]
    if (lastMessage.author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            {author: 'Bot', text: `${lastMessage.author}, Hello there!!!!`}
          ]
        })
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
