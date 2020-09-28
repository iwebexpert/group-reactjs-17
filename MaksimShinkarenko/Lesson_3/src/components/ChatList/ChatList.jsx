import React, {Component} from "react";
import {List, ListItem, Divider } from '@material-ui/core';

import './ChatList.scss'

export class ChatList extends Component {
    state = {
        chatList: [
            'Чат 1',
            'Чат 2',
            'Чат 3',
            'Чат 4',
        ]
    }

    render() {
        return (
            <div className='chatList'>
                <List>
                    {this.state.chatList.map((item,idx) => <ListItem className="chatListItem" key={idx}>{item}</ListItem>)}
                </List>
            </div>
        )
    }
}