import React, {Component} from 'react'

import './Message.scss'

export class Message extends Component {
  render() {
    const {message, author} = this.props
    return (
      <div className='message'>
        <p>{message}</p><small>{author}</small>
      </div>
    )
  }
}