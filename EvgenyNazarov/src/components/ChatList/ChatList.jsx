import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

import './ChatList.css';

export class ChatList extends Component
{
    render()
    {
        const {chats} = this.props;

        const chatsList = chats.map((item) => (
            <ListItem key={item.id}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <Link to={`/chats/${item.id}`}><ListItemText primary={item.title} /></Link>
                {item.fire && <div className='red'>!</div>}
            </ListItem>
        ));
        return(
            <div>
                {chatsList}
            </div>
        );
    }
}