import React, {Component} from 'react'
import {Layout} from '@components/layout'
import {MessageField} from '@components/messageField'
import {MessageList} from '../messageList'
import {debounce} from '@/utils'

class App extends Component {
  state = {
    messages: [
      {text: 'Hello!', author: 'Bot'},
      {text: 'How are you?', author: 'Bot'},
    ],
    chats: [1, 2, 3, 4, 5]
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages.slice(-1)[0]
    if (lastMessage.author !== 'Bot') {
      this.ansewer()
    }
  }

  ansewer = debounce(() => {
    const message = {text: 'test message', author: 'Bot'}
    this.setState({messages: [...this.state.messages, message]})
  }, 1000).bind(this)

  onSubmit = (message) => {
    this.setState({messages: [...this.state.messages, message]})
  }

  render() {
    const {messages} = this.state
    return (
      <Layout>
        <MessageList messages={messages} />
        <MessageField onSubmit={this.onSubmit} />
      </Layout>
    )
  }
}

export {App}
