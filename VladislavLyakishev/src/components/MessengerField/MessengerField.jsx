import React, {Component} from 'react'
import {TextField, Fab} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import './MessengerField.scss'

export class MessengerField extends Component {

  state = {
    author: '',
    message: ''
  }

  inputFieldHandler = (event) => {
    const fieldName = event.target.name
    this.setState({[fieldName]: event.target.value})
  }


  sendMessageHandler = () => {
    const {author, message} = this.state
    const {onSend} = this.props

    if (!message || !author){
      alert('Заполните поля')
      return
    }

    if (typeof onSend === 'function'){
      onSend(this.state)
      this.setState({
        message: ''
      })
    }
  }

  render() {
    const {author, message} = this.state
    return (
      <>
        <div>
          <TextField
              label="Введите имя"
              variant="outlined"
              name='author'
              onChange={this.inputFieldHandler}
              value={author}
          />
          <TextField
              label="Введите сообщение"
              variant="outlined"
              name='message'
              onChange={this.inputFieldHandler}
              value={message}
              autoFocus
              multiline
          />
          <Fab
              variant="round"
              color="primary"
              onClick={this.sendMessageHandler}
          >
            <SendIcon />
          </Fab>
        </div>
      </>
    )
  }
}