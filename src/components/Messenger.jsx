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


  render() {
    const {messageData} = this.state
    return (
      <>
        <h2>Messenger</h2>
        <MessageList messageData={messageData}/>
        <MessengerField />
      </>
    )
  }
}