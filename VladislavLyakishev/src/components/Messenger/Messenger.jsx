import React, {Component} from 'react'
import {MessageList} from "../MessageList";
import {MessengerField} from "../MessengerField";
import {nanoid} from "nanoid";

import {chats} from '../../helpers/chatsData'

import './Messenger.scss'

export class Messenger extends Component {

  state = {
    chats,
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
    const {author, id} = this.state.messageData[this.state.messageData.length - 1]
    if (author !== 'BOT') {
      const timerBotAnswer = setTimeout( () => {
        if (id === this.state.messageData[this.state.messageData.length - 1].id) {
          this.setState({
            messageData: this.state.messageData.concat(botAnswer)
          })
        }
      }, 2000)
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