import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TextField, Grid, Button} from '@material-ui/core'
import {Send} from '@material-ui/icons'
import './MessageField.scss'

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

    this.setState({[fieldName]: text})
  }

  onSubmitHandler = () => {
    if (this.state.text.trim()) {
      this.props.onSubmit({...this.state})
      this.setState({text: ''})
    }
  }

  onKeyPressHandler = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault()
      this.onSubmitHandler()
    }
  }

  render() {
    const {text, author} = this.state

    return (
      <Grid
        container
        alignItems="center"
        spacing={2}
        className="message-field"
        onKeyPress={this.onKeyPressHandler}
      >
        <Grid item sm={3}>
          <TextField
            variant="filled"
            className="text-field"
            label="Введите имя"
            name="author"
            value={author}
            onChange={this.onChangeHandler}
          />
        </Grid>

        <Grid item sm={6}>
          <TextField
            variant="filled"
            className="text-field"
            label="Введите сообщение"
            name="text"
            value={text}
            multiline
            onChange={this.onChangeHandler}
          />
        </Grid>

        <Grid item sm={3}>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={this.onSubmitHandler}
          >
            Отправить  &nbsp;
            <Send />
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export {MessageField}