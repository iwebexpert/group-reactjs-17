import React, {Component} from 'react';
import {ListItemIcon, ListItemText, List, ListItem, Divider} from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';

export class ChatList extends Component{
    render(){
        return(
            <div>
             <List component="nav" aria-label="main mailbox folders">
                 <ListItem button selected>
                    <AndroidIcon  />
                    <ListItemText primary="GeekBotChat 1" />
                 </ListItem>
                 <ListItem button>
                    <AndroidIcon  />
                    <ListItemText primary="GeekBotChat 2" />
                 </ListItem>
                 <ListItem button>
                    <AndroidIcon  />
                    <ListItemText primary="GeekBotChat 3" />
                 </ListItem>
             </List>
            </div>
        );
    }
}  