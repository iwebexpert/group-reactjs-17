import React, {Component, createRef} from 'react'
import PropTypes from 'prop-types'
import './MessageList.scss'
import {Message} from '@components/message'

class MessageList extends Component {
  bottom = createRef()

  componentDidMount () {
    this.scrollToBottom()
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    this.bottom.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const {messages} = this.props
    return (
      <div className="message-list">
        {messages.map((message, index) => (
          <Message
            key={index}
            {...message}
          />
        ))}
        <div ref={this.bottom} />
      </div>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export {MessageList}