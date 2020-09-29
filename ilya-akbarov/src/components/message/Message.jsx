import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Message.scss'
import classNames from 'classnames'

class Message extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }

  render() {
    const { text, author } = this.props

    const classes = classNames({
      message: true,
      bot: author === 'Bot',
      user: author !== 'Bot'
    })

    return (
      <div className={classes}>
        <div className="body">
          <strong>{author}:&nbsp;</strong>{text}
        </div>
      </div>
    )
  }
}

export { Message }