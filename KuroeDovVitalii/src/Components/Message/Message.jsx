import React, { Component } from 'react'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import { nanoid } from 'nanoid'
import classNames from 'classnames'
class Message extends Component {
    render(){
        const classes = classNames('messages', {
            'me' : this.props.message.author === 'me',
            'message' : this.props.message.author !== 'me'
        }) 
        return(
            <div className="message-block">
                <Chip 
                    deleteIcon={<DoneIcon />} 
                    color="primary" 
                    className={classes} 
                    clicable="true"
                    label={this.props.message.text}
                    avatar={<Avatar>{this.props.message.author}</Avatar>} />
            </div>
            
        )
    }
}


export default Message