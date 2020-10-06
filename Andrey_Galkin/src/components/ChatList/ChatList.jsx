import React, {Component} from 'react';
import {ListItemIcon, ListItemText, List, ListItem} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Grid from "@material-ui/core/Grid";

import './ChatList.scss';

export class ChatList extends Component{

  state = {
    chats: ['1', '2', '3', '4', '5'],
  };


  render(){
    return(
      <Grid item xs={3}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <SendIcon  />
            </ListItemIcon>
            <ListItemText primary="Чат 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon  />
            </ListItemIcon>
            <ListItemText primary="Чат 2" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon  />
            </ListItemIcon>
            <ListItemText primary="Чат 3" />
          </ListItem>
        </List>
      </Grid>
    );
  }
}