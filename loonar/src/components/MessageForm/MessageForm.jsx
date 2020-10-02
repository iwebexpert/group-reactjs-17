import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import {Grid} from '@material-ui/core';

export class MessageForm extends Component
{
    state = {
        text: '',
        author: '',
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    // onChangeInputHandler = (event) => {
    //     this.setState({text: event.target.value});
    // };

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

        console.log(this.state);
    };
    onKeyUp = (event) => {
        if (event.ctrlKey && event.keyCode === 13){
            this.onSubmitForm();
        }    
    }
    render()
    {
        const {text, author} = this.state;

        return (
            <Grid container spacing={3}>
                <Grid container item spacing={1}>
                    <TextField 
                variant="outlined" 
                name="author" 
                label="Автор" 
                onChange={this.onChangeInputHandler} 
                value={author}
                onKeyUp={(event) => this.onKeyUp(event)} /></Grid>
                <Grid container item spacing={1}><TextField 
                variant="outlined" 
                name="text" 
                label="Введите текст сообщения" 
                onChange={this.onChangeInputHandler} 
                value={text}
                multiline
                autoFocus
                onKeyUp={(event) => this.onKeyUp(event)}
                    /></Grid>
                    <Grid container item spacing={1}><Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send /></Fab></Grid>
            </Grid>
            );
    }
}

// MessageForm.propTypes = {
//     onSend: PropTypes.func.isRequired,
// };