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
    // const botAnswer = {
    //   message: this.state.messageData[this.state.messageData.length - 1].author + ' Спасибо за ваше сообщение, но в чате никого нет, кроме меня...',
    //   author: 'BOT',
    //   id: nanoid()
    // };
    // const {author, id} = this.state.messageData[this.state.messageData.length - 1]
    // if (author !== 'BOT') {
    //   const timerBotAnswer = setTimeout( () => {
    //     if (id === this.state.messageData[this.state.messageData.length - 1].id) {
    //       this.setState({
    //         messageData: this.state.messageData.concat(botAnswer)
    //       })
    //     }
    //   }, 2000)
    // }
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
        [chat]: chat
      }
    })
    console.log(this.state.chats)
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