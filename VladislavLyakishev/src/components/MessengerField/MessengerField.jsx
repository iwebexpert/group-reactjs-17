import React, {Component} from 'react'

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
        <input type="text" name='author' placeholder='Введите имя' onChange={this.inputFieldHandler} value={author}/>
        <br/>
        <textarea name="message" id="message" placeholder='Введите сообщение' cols="30" rows="10" onChange={this.inputFieldHandler} value={message}/>
        <br/>
        <button onClick={this.sendMessageHandler}>Отправить</button>
      </>
    )
  }
}