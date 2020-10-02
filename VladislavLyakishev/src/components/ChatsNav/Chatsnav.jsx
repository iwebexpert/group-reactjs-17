import React, {Component} from 'react'
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import {Link} from 'react-router-dom'

import {chats} from '../../helpers/chatsData'

export class ChatsNav extends Component {

    render() {
        const chatList = chats.map( (item) => (
            <ListItem button key={item.id}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>
                    <Link to={`/chats/${item.id}`}>{item.title}</Link>
                </ListItemText>
            </ListItem>
        ))
        return (
            <List component="nav" aria-label="main mailbox folders">
                {chatList}
            </List>
        )
    }
}