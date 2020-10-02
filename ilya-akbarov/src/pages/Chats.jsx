import React, {Component} from 'react'
import {Layout} from '@components/layout'
import {MessageField} from '@components/messageField'
import {MessageList} from '@components/messageList'
import {ChatList} from '@components/chatList'
import {debounce} from '@/utils'
import {chats} from '../helpers/chatsData'
import { Typography } from '@material-ui/core'

class ChatsPage extends Component {
  state = {
    chats,
  }
  
  componentDidUpdate() {
    const lastMessage = this.currentChat.messages.slice(-1)[0]
    if ((lastMessage && lastMessage.author !== 'Bot')) {
      this.answer()
    }
  }
  
  get currentChat() {
    const {chats} = this.state
    const {match} = this.props
    return chats.find(chat => chat.id === +match.params.id)
  }
  
  get currentChatIndex() {
    const {chats} = this.state
    return chats.indexOf(this.currentChat);
  }

  answer = debounce(() => {
    this.onSubmit({text: 'test message', author: 'Bot'})
  }, 1000).bind(this)

  onSubmit = (message) => {
    const {chats} = this.state
    const currentChat = this.currentChat
    currentChat.messages = currentChat.messages.concat([message])
    chats[this.currentChatIndex] = currentChat
    
    this.setState({chats})
  }

  render() {
    const {chats} = this.state
    const currentChat = this.currentChat
    
    return (
      <Layout
        chatList={
          <ChatList chats={chats} />
        }
      >
        { currentChat ? (
          <>
            <MessageList messages={currentChat.messages} />
            <MessageField onSubmit={this.onSubmit} />
          </>
        ) : (
          <Typography
             variant="h1"
             align="center"
          >
            Выбирете чат
          </Typography>
        )}
        
      </Layout>
    )
  }
}


export default ChatsPage
