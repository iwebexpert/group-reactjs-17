import React, {Component} from 'react'
import {Layout} from '@components/layout'
import {MessageField} from '@components/messageField'
import {MessageList} from '@components/messageList'
import {ChatList} from '@components/chatList'
import { Typography } from '@material-ui/core'

class ChatsPage extends Component {
  
  render() {
    const {
      chats,
      messages,
      onSubmit,
      username,
      handleChatAdd,
      handleChatOpen
    } = this.props
    
    return (
      <Layout
        chatList={
          <ChatList
            chats={chats}
            handleAddChat={handleChatAdd}
            handleChatOpen={handleChatOpen}
          />
        }
      >
        { messages ? (
          <>
            <MessageList messages={messages} />
            <MessageField
              onSubmit={onSubmit}
              username={username}
            />
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
