import React, {Component} from 'react'
import {Layout} from '@components/layout'
import {MessageField} from '@components/messageField'
import {MessageList} from '@components/messageList'
import {ChatList} from '@components/chatList'
// import {debounce} from '@/utils'
import { Typography } from '@material-ui/core'

class ChatsPage extends Component {
  
  // componentDidUpdate() {
  //   const chat = this.currentChat
  //
  //   if (chat) {
  //     const lastMessage = chat.messages.slice(-1)[0]
  //     if ((lastMessage && lastMessage.author !== 'Bot')) {
  //       this.answer()
  //     }
  //   }
  // }

  // answer = debounce(() => {
  //   this.onSubmit({text: 'test message', author: 'Bot'})
  // }, 1000).bind(this)

  render() {
    const {chats, messages, onSubmit, username} = this.props
    
    return (
      <Layout
        chatList={
          <ChatList chats={chats} />
        }
      >
        { messages ? (
          <>
            <MessageList messages={messages} />
            <MessageField onSubmit={onSubmit} username={username}/>
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
