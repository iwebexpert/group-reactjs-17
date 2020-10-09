import React, {Component} from 'react'
import {MessageList} from "../MessageList";
import {MessengerField} from "../MessengerField";
import './Messenger.scss'

export class Messenger extends Component {

  render() {
    const messageData = this.props.messages;
    const {handleMessageSend} = this.props;
    return (
      <div className="messenger">
        <div className='messenger-list'>
          {messageData.length > 0 ? <MessageList messageData={messageData}/> : <div className="messenger-empty">Выберите чат в списке слева</div>}
        </div>
        {messageData.length > 0 ? <MessengerField onSend={handleMessageSend}/> : <div></div>}
      </div>
    )
  }
}