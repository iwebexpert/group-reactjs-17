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
      message: this.messages[this.messages.length - 1].author + ' Спасибо за ваше сообщение, но в чате никого нет, кроме меня...',
      author: 'BOT',
      id: nanoid()
    };
    const {author, id} = this.messages[this.messages.length - 1]
    if (this.messages) {
      if (author !== 'BOT') {
        setTimeout( () => {
          if (id === this.messages[this.messages.length - 1].id) {
            this.handleMessageSend(botAnswer)
          }
        }, 2000)
      }
    }
  }

  componentWillUnmount() {

  }

  get messages() {
    const {chats} = this.state
    const {id} = this.props.match.params

    let messages = []

    if (id && chats[id]) {
      messages = chats[id].messages
    }
    return messages
  }

  handleMessageSend = (message) => {
    const {chats} = this.state
    const {id} = this.props.match.params

    const chat = chats[id]
    message.id = nanoid();
    chat.messages = this.messages.concat(message)


    this.setState({
      chats: {
        ...chats,
        [id]: chat
      }
    })
  };


  render() {
    const messageData = this.messages;
    return (
      <div className="messenger">
        <div className='messenger-list'>
          {messageData.length > 0 ? <MessageList messageData={messageData}/> : <div className="messenger-empty">Выберите чат в списке слева</div>}
        </div>
        {messageData.length > 0 ? <MessengerField onSend={this.handleMessageSend}/> : <div></div>}
      </div>
    )
  }
}