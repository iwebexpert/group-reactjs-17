import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './messageField.scss'

class MessageField extends Component {
  state = {
    text: '',
    author: '',
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  onChangeHandler = (event) => {
    const fieldName = event.target.name
    const text = event.target.value
    console.log(text)

    this.setState({ [fieldName]: text})
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.onSubmit({...this.state})
    this.setState({ text: '' })
  }

  render() {
    const { text, author } = this.state

    return (
      <form
        className="message-form"
        onSubmit={this.onSubmitHandler}
      >
        <div>
          <input
            type="text"
            placeholder="Введите имя"
            className="name-input"
            name="author"
            value={author}
            onChange={this.onChangeHandler}
          />
        </div>
        <textarea
          name="text"
          placeholder="Введите сообщение"
          name="text"
          className="message-field"
          value={text}
          onChange={this.onChangeHandler}
        />
        <button type="submit">Отправить</button>
      </form>
    )
  }
}

export default MessageField