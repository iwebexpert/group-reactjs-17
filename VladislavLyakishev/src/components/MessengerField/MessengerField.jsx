import React, {Component} from 'react'
import {TextField, Fab} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import './MessengerField.scss'

export class MessengerField extends Component {


  state = {
    author: '',
    message: ''
  }

  componentDidMount() {
    const {profile} = this.props
    this.state.author = profile.name
  }

  inputFieldHandler = (event) => {
    const fieldName = event.target.name
    this.setState({[fieldName]: event.target.value})
  }

  inputPressKeyHandler = (event) => {
    if (event.keyCode === 13 && event.ctrlKey){
      event.preventDefault()
      this.sendMessageHandler()
    }
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
    const {profile} = this.props
    const {author, message} = this.state
    console.log('Props Field', profile)
    return (
      <>
        <div className="messenger-form">
          <TextField
              label="Введите имя"
              variant="outlined"
              name='author'
              onChange={this.inputFieldHandler}
              value={profile.name}
          />
          <TextField
              className="messenger-form_message"
              label="Введите сообщение"
              variant="outlined"
              name='message'
              onChange={this.inputFieldHandler}
              onKeyDown={this.inputPressKeyHandler}
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