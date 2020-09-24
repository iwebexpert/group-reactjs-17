import React, {Component} from 'react'

export default class Message extends Component {
  render() {
    const {message, author} = this.props
    return (
      <div>
        <p>{message} | <small>{author}</small></p>
      </div>
    )
  }
}