import React, {Component} from 'react'
import MessageList from "components/MessageList";
import MessengerField from "components/MessengerField";


export default class Messenger extends Component {

  state = {
    messageData: [
      {
        message: 'First message',
        author: 'first author'
      },
      {
        message: 'Second message',
        author: 'second author'
      },
      {
        message: 'Three message',
        author: 'three author'
      },
    ],
  }

  componentDidUpdate() {
    const botAnswer = {
      message: this.state.messageData[this.state.messageData.length - 1].author + ' Спасибо за ваше сообщение, но в чате никого нет, кроме меня...',
      author: 'BOT'

    }
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
    this.setState({
      messageData: this.state.messageData.concat(message)
    })
  }


  render() {
    const {messageData} = this.state
    return (
      <>
        <h2>Messenger</h2>
        <MessageList messageData={messageData}/>
        <MessengerField onSend={this.handleMessageSend}/>
      </>
    )
  }
}