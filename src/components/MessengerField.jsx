import React, {Component} from 'react'

export default class MessengerField extends Component {

  state = {
    author: '',
    message: ''
  }

  inputAuthorHandler = (event) => {
    const inputAuthor = event.target.value
    this.setState({author: inputAuthor})
  }

  inputMessageHandler = (event => {
    const inputMessage = event.target.value
    this.setState({message: inputMessage})
  })

  sendMessageHandler = () => {

  }

  render() {
    return (
      <>
        <input type="text" name='author' placeholder='Введите имя' onChange={this.inputAuthorHandler}/>
        <br/>
        <textarea name="message" id="message" cols="30" rows="10" onChange={this.inputMessageHandler}/>
        <br/>
        <button onClick={this.sendMessageHandler}>Отправить</button>
      </>
    )
  }
}