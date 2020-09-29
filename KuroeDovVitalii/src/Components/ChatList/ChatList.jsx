import React, { Component } from 'react'
import { List, Typography } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'
class ChatList extends Component {

    render() {
        const chatElement = this.props.chats.map( item => <ChatListItem data={item} key={item.id} />)
        return(
            <aside className="chat-list">
                <Typography>Список Чатов</Typography>
                { chatElement }
            </aside>
        )
    }
}

export default ChatList