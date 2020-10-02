import React, {Component} from 'react';
import PropTypes, {instanceOf} from 'prop-types';
import {Button, TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';

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
            alert('Введите текст сообщения');
            return;
        }

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }
    };

    onSubmitFormEnter = (e) => {
        if (e.keyCode === 13 && e.ctrlKey){
            e.preventDefault();
            this.onSubmitForm(e);
        }
        else
            return false;
    }

    render()
    {
        const {text, author} = this.state;

        return (
            <div>
                <TextField 
                variant="outlined" 
                name="author" 
                label="Автор" 
                onChange={this.onChangeInputHandler} 
                value={author} />
                <TextField 
                variant="outlined" 
                name="text" 
                label="Введите текст сообщения" 
                onChange={this.onChangeInputHandler} 
                value={text}
                multiline
                autoFocus
                onKeyDown={this.onSubmitFormEnter}
                    />
                    <Fab className="sendBtn" variant="round" color="primary" onClick={this.onSubmitForm}><Send /></Fab>
            </div>
            );
    }
}