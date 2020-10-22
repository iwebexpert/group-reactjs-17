import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

import './MessageForm.scss';

export class MessageForm extends Component
{
    state = {
        text: '',
        author: '',
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };


    onChangeInputHandler = (event) => {
        const fieldName = event.target.name;
        this.setState({[fieldName]: event.target.value});
    };

    onSubmitForm = () => {
        const {text} = this.state;
        const {onSend} = this.props;

        if(!text){
            console.log('Введите сообщение');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }

        console.log(this.state);
    };

    onSubmitFormEnter = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) {
            event.preventDefault();
            this.onSubmitForm();
        }
    }

    render()
    {
        const {text, author} = this.state;

        return (
            <div className="messageForm">
                <TextField 
                variant="outlined"
                name="author" 
                label="Автор" 
                onChange={this.onChangeInputHandler} 
                value={author}
                />
                 <TextField 
                className="messageFormText" 
                variant="outlined"
                name ="text" 
                label="Введите текст сообщения"
                onChange={this.onChangeInputHandler}
                onKeyDown={this.onSubmitFormEnter} 
                value={text}
                multiline
                autoFocus
                />
                <Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send/></Fab>
            </div>
        );
    }
}