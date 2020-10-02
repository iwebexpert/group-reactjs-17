import React, {Component} from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
 state = {
     chatList: [
        'Chat 1', 
        'Chat 2', 
        'Chat 3', 
        'Chat 4',
        'Chat 5',
     ]
 }

   render(){
       return(
        <List>
            {this.state.chatList.map((text, index) => (
            <div>
            <ListItem button key={text}>
                <ListItemIcon><ChatIcon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            <Divider />
            </div>
            ))}
      </List>
       )
   }
}