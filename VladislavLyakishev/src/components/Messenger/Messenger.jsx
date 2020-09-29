import React, {Component} from 'react'
import {MessageList} from "../MessageList";
import {MessengerField} from "../MessengerField";
import {nanoid} from "nanoid";

import './Messenger.scss'

export class Messenger extends Component {

  state = {
    messageData: [
      {
        id: nanoid(),
        message: 'First message',
        author: 'first author'
      },
    ],
  };

  componentDidUpdate() {
    const botAnswer = {
      message: this.state.messageData[this.state.messageData.length - 1].author + ' Спасибо за ваше сообщение, но в чате никого нет, кроме меня...',
      author: 'BOT',
      id: nanoid()
    };
    const tempAuthor = this.state.messageData[this.state.messageData.length - 1].author
    if (tempAuthor !== 'BOT') {
      const timerBotAnswer = setTimeout( () => {
        this.setState({
          messageData: this.state.messageData.concat(botAnswer)
        })
      }, 1000)
    }
  }

  handleMessageSend = (message) => {
    message.id = nanoid();
    this.setState({
      messageData: this.state.messageData.concat(message)
    })
  };


  render() {
    const {messageData} = this.state;
    return (
      <div className="messenger">
        <div className='messenger-list'>
          <MessageList messageData={messageData}/>
        </div>
        <MessengerField onSend={this.handleMessageSend}/>
      </div>
    )
  }
}