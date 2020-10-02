import React, {Component} from 'react'
import {List, ListItem, ListItemText, Button, Typography} from '@material-ui/core'
import {nanoid} from 'nanoid'
import {chats} from '../../helpers/chatsData'
import {Link} from 'react-router-dom'

class ChatList extends Component {
  
  render() {
    const {chats} = this.props
    return (
      <List>
        {chats.map((chat) => (
          <ListItem
            button
            key={nanoid()}
            component={Link}
            to={`/chats/${chat.id}`}
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
