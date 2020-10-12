import React, {Component} from 'react';
import {ListItemIcon, ListItemText, List, ListItem} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

import {chats} from "../../helpers/chatsData";

import './ChatList.scss';

export class ChatList extends Component {

  state = {
    chats,
  };

  render() {
    const chatsList = chats.map((item) => (
      <ListItem key={item.id}>
        <Link to={`/chats/${item.id}`}>
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <ListItemText primary={item.title}/>
        </Link>
      </ListItem>
    ));

    return (
      <Grid item xs={3}>
        <List component="nav" aria-label="main mailbox folders">
          {chatsList}
        </List>
      </Grid>
    );
  }
}