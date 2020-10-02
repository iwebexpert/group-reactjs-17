import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

import {chats} from '../../helpers/chatsData';

export class AddChat extends Component
{

    state = {
        chats,
        title: '',
    }

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };


    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {title} = this.state;
        const {onSend} = this.props;
        const {chats} = this.state;

        if(!title){
            alert('Введите текст сообщения');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
        }

        const newId = this.state.chats.length;
        chats.push({id: newId, title: title, messages: [{id: 0, author: 'Bot', text: `Стартовал чат "${title}"`}]});
  
        console.log(this.state.chats);
    };
 
    render(){

        const {title, chats} = this.state;

        return (
            <div>
                <h1>New title</h1>
                <TextField 
                variant="outlined"
                name="title" 
                label="Title"
                value={title} 
                onChange={this.onChangeInputHandler} 
                autoFocus
                />          
                <Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send /></Fab>
            </div>
        )
    }
}