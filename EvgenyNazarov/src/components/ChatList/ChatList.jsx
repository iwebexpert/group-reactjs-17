import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

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
            </ListItem>
        ));
        return(
            <div>
                {chatsList}
            </div>
        );
    }
}