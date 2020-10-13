import {List, ListItem} from 'material-ui';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';


let ChatList = ({chats}) => {

    return (

        <div>
            {chats.map((chat) => {
                return <NavLink key={chat.id} to={`/chats/${+chat.id}`} activeClassName="selected">
                    <ListItem
                        leftIcon={<ContentSend/>}
                    >{chat.title}</ListItem>
                </NavLink>

            })}

        </div>)


};
export default ChatList;
