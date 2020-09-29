import React, {Component} from 'react';
import {ListItemIcon, ListItemText, List, ListItem, Divider} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export class ChatList extends Component{
    render(){
        return(
            <div>
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
            </div>
        );
    }
} 