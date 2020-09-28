import React, {Component} from 'react';
import {ListItemIcon,ListItemText,List,ListItem, Divider} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
export class ChatList extends Component{

    render(){
        return(
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Чат №1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Чат №2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Чат №3" />
                    </ListItem>
                </List>
                <Divider />
            </div>
        );
    }
}