import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField, Fab} from '@material-ui/core'
import {Send} from '@material-ui/icons'

import './MessageForm.scss';

export class MessageForm extends Component {
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

    if (!text) {
      alert('Введите текст сообщения');
      return;
    }

    if (typeof onSend === 'function') {
      onSend(this.state);
      this.setState({text: ''});
    }
  };

  onKeyUp = (event) => {
    if (event.ctrlKey && event.keyCode === 13){
      this.onSubmitForm();
    }
  };

  render() {
    const {text, author} = this.state;

    return (
      <div className="message-form-container">
        <TextField
          name="author"
          onChange={this.onChangeInputHandler}
          value={author}
          label="Автор"/>
        <TextField
          name="text"
          abel="Введите текст сообщения"
          onChange={this.onChangeInputHandler}
          onKeyUp={(event) => this.onKeyUp(event)}
          value={text}
          variant="outlined"
          multiline
          autoFocus/>
        <Fab
          variant="round"
          color="primary"
          onClick={this.onSubmitForm}>
          <Send/>
        </Fab>
      </div>
    );
  }
}