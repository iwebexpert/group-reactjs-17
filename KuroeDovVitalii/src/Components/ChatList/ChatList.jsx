import React, { Component } from 'react'
import { List, Typography, Paper } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'

class ChatList extends Component {
    render() {
        const chats = this.props.chats

        const chatsElemet = []
        for (let [key, value] of Object.entries(chats)) {
            chatsElemet.push(key)
        }

        return(
            <aside className="chat-list">
               <Paper elevation={5}>
                    <List dense className="" subheader={
                        <Paper elevation={5}> 
                            <Typography align="center" paragraph={true} className="chatList-header__text">Список чатов</Typography>
                            
                        </Paper>}
                    >
                    { chatsElemet.map((id) => 
                        <ChatListItem 
                            key={ id } 
                            id={ id }
                            fire= { chats[id].fire }
                            name={ chats[id].name }
                            avatar={ chats[id].avatar }
                            messages={ chats[id].messages }
                            handleChatDelete={ this.props.handleChatDelete }
                            handleSelectChat={ this.props.handleSelectChat } 
                            selected={ this.props.selected } />
                    )}
                </List>
                </Paper>
            </aside>
        )
    }
}

export default ChatList