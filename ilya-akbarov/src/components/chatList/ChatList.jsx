import React, {Component} from 'react'
import {List, ListItem, ListItemText, Button, Typography} from '@material-ui/core'
import {nanoid} from 'nanoid'

class ChatList extends Component {

  render() {
    const chats = [1, 2, 3, 4, 5]
    return (
      <List>
        {chats.map((chat) => (
          <ListItem
            button key={nanoid()}
          >
            <ListItemText>
              <Typography
                variant="h5"
                align="center"
                noWrap
              >
                Chat {chat}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}

      </List>
    )
  }
}

export {ChatList}