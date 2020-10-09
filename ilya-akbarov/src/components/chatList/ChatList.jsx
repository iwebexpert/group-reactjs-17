import React, {Component} from 'react'
import {List, ListItem, ListItemText, Typography, Button} from '@material-ui/core'
import {nanoid} from 'nanoid'

class ChatList extends Component {
  
  render() {
    const {
      chats,
      handleAddChat,
      handleChatOpen
    } = this.props
    
    return (
      <List>
        <ListItem button onClick={handleAddChat}>
          <ListItemText>
            <Typography
              variant="h5"
              align="center"
              noWrap
            >
              Add chat
            </Typography>
          </ListItemText>
        </ListItem>
        {chats.map((chat) => (
          <ListItem
            button
            key={nanoid()}
            component={Button}
            onClick={() => handleChatOpen(chat)}
            style={{
              backgroundColor: chat.unread ? 'yellow' : ''
            }}
          >
            <ListItemText>
              <Typography
                variant="h5"
                align="center"
                noWrap
              >
                {chat.name}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}

      </List>
    )
  }
}

export {ChatList}
