import React, { Component } from 'react'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

class Message extends Component {
    render(){
        return(
            <div className="message-block">
                <Chip 
                    deleteIcon={<DoneIcon />} 
                    color="primary" 
                    className="me" 
                    clicable="true"
                    label={this.props.message}
                    avatar={<Avatar>{this.props.message.name}</Avatar>} />
            </div>
            
        )
    }
}


export default Message