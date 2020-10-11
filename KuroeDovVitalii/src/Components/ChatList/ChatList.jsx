import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { List, Typography, Paper, Container } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'
class ChatList extends Component {

    render() {
        const chatsElemet = []
        for (let [key, value] of Object.entries(this.props.chats)) {
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
                            name={ this.props.chats[id].name }
                            avatar={ this.props.chats[id].avatar }
                            messages={ this.props.chats[id].messages }
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