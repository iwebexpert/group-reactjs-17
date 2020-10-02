import React, {Component} from 'react'
import {List, ListItem, ListItemIcon, ListItemText, TextField, Fab} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import AddBox from '@material-ui/icons/AddBox'
import {Link} from 'react-router-dom'

import {chats} from '../../helpers/chatsData'

import './Chatsnav.scss'
import {nanoid} from "nanoid";

export class ChatsNav extends Component {

    state = {
        chats,
        chatName: ''
    }

    chatNameHandler = (event) => {
        this.setState({
            chatName: event.target.value
        })
    }

    addChatHandler = (event) => {
        const {chatName} = this.state
        const {chats} = this.state
        let isChatName = false
        chats.forEach( (item) => {
            if (item.title === chatName) {
                isChatName = true
            }
        })
        if (!isChatName) {
            this.setState({
                chats: chats.concat({
                    id: nanoid(),
                    title: chatName,
                    messages: [
                        {
                            id: 0,
                            author: 'Test',
                            text: 'Test messages'
                        }
                    ]
                }),
                chatName: ''
            })
        } else {
            alert('Чат с таким именем уже существует')
        }

}

    render() {
        const chatList = this.state.chats.map( (item) => (
            <ListItem button key={item.id}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>
                    <Link to={`/chats/${item.id}`}>{item.title}</Link>
                </ListItemText>
            </ListItem>
        ))
        const {chatName} = this.state
        return (
            <List component="nav" aria-label="main mailbox folders">
                {chatList}
                <div className="chat-add">
                    <TextField
                        label="Назовите чат"
                        variant="outlined"
                        onChange={this.chatNameHandler}
                        value={chatName}
                    />
                    <Fab
                        variant="round"
                        onClick={this.addChatHandler}
                    >
                        <AddBox />
                    </Fab>
                </div>
            </List>
        )
    }
}