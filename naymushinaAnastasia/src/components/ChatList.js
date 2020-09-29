import {List, ListItem} from 'material-ui';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';

let  ChatList = ({chats}) =>{
    console.log (chats)

            return chats.map((chat) => {
                return <NavLink to={`/chat/${chat.id}`} activeClassName="selected">
                    <ListItem
                        primaryText={1}
                        leftIcon={<ContentSend/>}
                    >{chat.title}</ListItem>
                </NavLink>
            })



};
export default ChatList;
