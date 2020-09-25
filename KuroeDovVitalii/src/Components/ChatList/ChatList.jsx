import React, { Component } from 'react'
import { List, Typography } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'
class ChatList extends Component {

    render() {
        return(
            <aside className="chat-list">
                <Typography>Список Чатов</Typography>
            </aside>
        )
    }
}

export default ChatList