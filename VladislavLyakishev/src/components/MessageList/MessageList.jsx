import React, {Component} from 'react'
import {Message} from "../Message";

export class MessageList extends Component {

  render() {
    const {messageData} = this.props
    return (
      messageData.map( (elem, index) => {
        return <Message message={elem.message} author={elem.author} key={index}/>
      })
    )
  }
}