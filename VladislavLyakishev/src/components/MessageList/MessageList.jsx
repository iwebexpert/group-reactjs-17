import React, {Component} from 'react'
import {Message} from "../Message";


export class MessageList extends Component {

  render() {
    const {messageData} = this.props
    return (
      messageData.map( (elem) => {
        return <Message {...elem} key={elem.id}/>
      })
    )
  }
}