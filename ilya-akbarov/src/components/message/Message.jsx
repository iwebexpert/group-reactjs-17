import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }

  render() {
    const { text, author } = this.props
    return (
      <p><strong>{author}:&nbsp;</strong>{text}</p>
    )
  }
}

export default Message