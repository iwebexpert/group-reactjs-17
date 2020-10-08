import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import './ChatList.scss'
import {AddChatForm} from "components/AddChatForm";

export class ChatList extends Component {
    render() {
        const {chats, onChatAdd} = this.props;

        const chatsList = chats.map((item) => (
            <ListItem key={item.id} className={'chatListItem'}>
                <Link to={`/chats/${item.id}`}>
                    <ListItemText primary={item.title}/>
                </Link>
                {item.fire && <div className='red'>!</div>}
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