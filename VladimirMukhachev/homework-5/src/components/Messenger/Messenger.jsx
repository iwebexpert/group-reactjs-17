import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Grid, Divider, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';

// import {Home} from 'pages/Home';
// import {About} from 'pages/About';
// import {Error} from 'pages/Error';

// import {chats} from '../../helpers/chatsData';

import './Messenger.css';

export class Messenger extends Component
{
    // componentDidUpdate(){
    //     if(this.messages.length){
    //         const {author} = this.messages[this.messages.length - 1];
    //         if (author !== 'Bot'){
    //             setTimeout(() => {
    //                 this.handleMessageSend({text: `Hi, ${author}! Это бот...`, author: 'Bot'});
    //             }, 2000);
    //         }
    //     }
        
    // }
    render()
    {
        const {chats, messages, handleMessageSend} = this.props;

        // const chatsList = chats.map((item) => (
        // <ListItem key={item.id}>
        //     <Link to={`/chats/${item.id}`}><ListItemText primary={item.title} /></Link>
        // </ListItem>
        // ));
        const chatsList = chats.map((item) => (
            <Link key={item.id} to={`/chats/${item.id}`}>
                <ListItem key={item.id}>
                    <ListItemText primary={item.title} />
                </ListItem>
            </Link>
        ));

        // return (
        //     <>
        //     <div>
        //         <List>
        //             {chatsList}
        //             <ListItem>
        //                 <Link to="/"><ListItemText primary="Главная" /></Link>
        //             </ListItem>
        //             <ListItem>
        //                 <Link to="/about"><ListItemText primary="О нас" /></Link>
        //             </ListItem>
        //             <ListItem>
        //                 <Link to="/pagenotfount"><ListItemText primary="Страница с ошибкой" /></Link>
        //             </ListItem>
        //         </List>
        //     </div>
        //      <div className="messenger">
        //          <div className="messages-list ">
        //              {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
        //          </div>
        //          {messages && <MessageForm onSend={handleMessageSend} />}
        //      </div>
        //     </>
        //     );
        return (
            <>
            <Grid container>            
                <Grid item xs={12} sm={3} className="chatlist">
                    <List component="nav" aria-label="main mailbox folders">
                        {chatsList}
                    </List>
                </Grid>

                <Grid item xs={12} sm={9} className="messenger">
                    <div className="messages-list">
                        {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
                    </div>
                    <Divider />
                    {messages && <MessageForm className="message-form" onSend={handleMessageSend} />}
                </Grid>
            </Grid>
            </>
            );        
    }
}