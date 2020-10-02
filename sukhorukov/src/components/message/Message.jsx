import React from 'react'
import classNames from 'classnames'
import {Avatar, Paper, Box} from '@material-ui/core'
import './message.sass'

export class Message extends React.Component {
    render() {   
      const {author, text} = this.props.message
      const avatarLetters = author.slice(0,1).toUpperCase()

      const classes = classNames('msg', {
         'msg-left': author === 'robot',
         'msg-right': author !== 'robot',
      })

      return (   
         <div className={classes}>
            <Paper className="msg-content" elevation={5}>
               <Avatar><Box className="msg-avatar-leter">{avatarLetters}</Box></Avatar>

               <span style={{marginLeft: "0.6rem"}}>{text}</span>
            </Paper>
         </div> 
      )
    }
}