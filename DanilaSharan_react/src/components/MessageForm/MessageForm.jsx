import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import Grid from "@material-ui/core/Grid";

import './MessageForm.css'

export class MessageForm extends Component
{
    state = {
        text: '',
        author: '',
    };

    componentDidMount() {
        const {username} = this.props;
        this.setState({author: username});
    }

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

        console.log(this.state);
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
        const {username}=this.props

        return (
            <Grid className="message-form-container" container spacing={2}>
                <Grid item xs={12} >
                    <h3>&nbsp; &nbsp;Автор: <strong>{author || username}</strong></h3>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      className="text-field"
                      variant="outlined"
                      name="author"
                      label="Измените автора сообщения"
                      onChange={this.onChangeInputHandler}
                      value={author} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      className="text-field"
                      variant="outlined"
                      name="text"
                      label="Введите текст сообщения"
                      onChange={this.onChangeInputHandler}
                      value={text}
                      multiline
                      autoFocus
                      onKeyDown={this.onSubmitFormEnter}
                    />
                    <Fab variant="round" color="primary" style={{ background: "#3b2666" }} onClick={this.onSubmitForm}><Send /></Fab>
                </Grid>
            </Grid>
            );
    }
}

