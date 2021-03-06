import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import './ChatList.scss'
import {AddChatForm} from "components/AddChatForm";

export class ChatList extends Component {

    /*handleChatAdd = (title) => {
        const {chats} = this.props;

        let chatList = chats.concat([
            {
                id: chats.length,
                title: title,
                messages: [
                    {
                        id: 0,
                        author: 'WebDev',
                        text: `Приветствуем в новом чате ${title}`
                    },
                ]
            }
        ])

        this.props.onChatAdd({
            chats: chatList
        })
    }*/

    render() {
        const {chats, onChatAdd} = this.props;

        const chatsList = chats.map((item) => (
            <ListItem key={item.id} className='chatListItem'>
                <Link to={`/chats/${item.id}`}><ListItemText primary={item.title}/></Link>
            </ListItem>
        ));

        return (
            <>
                <div className='chatList'>
                    <List className='chatListUl'>
                        {chatsList}
                    </List>
                </div>
                <AddChatForm onSend={onChatAdd}/>
            </>
        )
    }
}