import React, {Component} from 'react'

export class Message extends Component {
  render() {
    const {message, author} = this.props
    return (
      <div>
        <p>{message} | <small>{author}</small></p>
      </div>
    )
  }
}