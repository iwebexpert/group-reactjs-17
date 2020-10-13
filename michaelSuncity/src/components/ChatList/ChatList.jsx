import React, {Component} from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import ErrorIcon from '@material-ui/icons/Error';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Switch, Route, Link} from 'react-router-dom';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import './ChatList.scss';

import {chats} from '../../helpers/chatsData';

export class ChatList extends Component {
    /* state = {
        chats,
    }*/

    redirectToProfile = () => {
        this.props.onSend(`/profile`);
    }

   render(){

    const {chats, isLoading, isError, handleChatsReload} = this.props;

    if(isLoading){
        return(
            <div>Loading...</div>
        );
    }

    const chatsList = chats.map((item) => (
        <ListItem button className="button-menu" key={item.id}>
            <ListItemIcon><ChatIcon /></ListItemIcon>
            <Link to={`/chats/${item.id}`}>
                <ListItemText primary={item.title} />
            </Link>
            <div className={`${item.fire==true ? 'newMessage' : 'hidden'}`}>
                <NewReleasesIcon/>
            </div>
        </ListItem>
        ));

       return(
           <>
        <List>
            <div>
            <ListItem button className="button-menu">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <Link to="/">
                    <ListItemText primary="Main" />
                </Link>
            </ListItem>
            </div>
            <div>
            <ListItem button className="button-menu">
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <Link to="/profile">
                    <ListItemText primary="Profile" />
                </Link>
            </ListItem>
            </div>
            <div>
            <ListItem button className="button-menu">
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <div onClick={this.redirectToProfile}><ListItemText primary="Profile redirect" /></div>
            </ListItem>
            </div>
            <div>
            <ListItem button className="button-menu">
                <ListItemIcon><ChatIcon /></ListItemIcon>
                <Link to="/about">
                    <ListItemText primary="About us" />
                </Link>
            </ListItem>
            </div>
            <div>
            <ListItem button className="button-menu">
                <ListItemIcon><ErrorIcon /></ListItemIcon>
                <Link to="/pagenotfount">
                    <ListItemText primary="Page not found" />
                </Link>
            </ListItem>
            </div>
        </List>
        <Divider />
        <List>
            {isError ? 
                <div>Error...Попробуйте получить чаты позднее
                    <div>
                        <button onClick={handleChatsReload}>Обновить чаты</button>
                    </div>
                </div> 
                : chatsList}
        </List>
        <ListItem button className="button-menu">
            <ListItemIcon><AddCircleIcon /></ListItemIcon>
            <Link to="/addchat">
                <ListItemText primary="Add new chat" />
            </Link>
        </ListItem>
      </>
       )
   }
}