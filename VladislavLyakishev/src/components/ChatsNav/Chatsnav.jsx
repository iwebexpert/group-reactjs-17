import React, {Component} from 'react'
import {List, ListItem, ListItemIcon, ListItemText, TextField, Fab} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import AddBox from '@material-ui/icons/AddBox'
import {Link} from 'react-router-dom'

import './Chatsnav.scss'

export class ChatsNav extends Component {

    state = {
        chatName: ''
    }

    chatNameHandler = (event) => {
        this.setState({
            chatName: event.target.value
        })
    }

    addChat = () => {
        const {chatName} = this.state
        const {addChat} = this.props

        if( typeof addChat === 'function'){
            addChat(chatName)
            this.setState({
                chatName: ''
            })
        }


    }



    render() {
        const chatList = this.props.chats.map( (item) => (
            <ListItem button key={item.id}>
                <ListItemIcon>
                    <InboxIcon color={item.fire ? 'secondary' : 'action'}/>
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
                        onClick={this.addChat}
                    >
                        <AddBox />
                    </Fab>
                </div>
            </List>
        )
    }
}