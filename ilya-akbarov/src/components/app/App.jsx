import React, { Component } from 'react'
import './App.scss'
import MessageField from '@components/messageField/messageField'
import Message from '@components/message/Message'

class App extends Component {
  state = {
    messages: [
      { text: 'Hello!', author: 'Bot' },
      { text: 'How are you?', author: 'Bot' },
    ]
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages.slice(-1)[0]
    if (lastMessage.author !== 'Bot') {
      setTimeout(() => {
        const message = { text: 'test message', author: 'Bot' }
        this.setState({ messages: [...this.state.messages, message] })
      }, 1000)
    }
  }

  onSubmit = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }
  
  render() {
    const { messages } = this.state
    return (
      <div className="app">
        <div className="container">
          <div className="message-container">
            {messages.map(({text, author}, index) => (
              <Message 
                key={index}
                text={text} 
                author={author} 
              />
            ))}
          </div>
          <MessageField onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}

export default App
