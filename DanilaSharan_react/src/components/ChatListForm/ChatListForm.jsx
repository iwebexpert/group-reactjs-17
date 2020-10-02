import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import Grid from "@material-ui/core/Grid";

import './ChatListForm.css'

export class ChatListForm extends Component
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

    return (
      <>
        <TextField
          variant="outlined"
          name="text"
          label="Новый чат"
          onChange={this.onChangeInputHandler}
          value={text}
          multiline
          autoFocus
          onKeyDown={this.onSubmitFormEnter}
        />
        <Fab variant="round" color="primary" onClick={this.onSubmitForm}><Send /></Fab>
      </>
    );
  }
}
