import React, { Component } from 'react'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import { nanoid } from 'nanoid'

class Message extends Component {
    render(){
        return(
            <div className="message-block">
                <Chip 
                    deleteIcon={<DoneIcon />} 
                    color="primary" 
                    className={this.props.message.author === "me" ? "me" : "message"} 
                    clicable="true"
                    label={this.props.message.text}
                    avatar={<Avatar src={`https://i.pravatar.cc/150?img=${nanoid(4)}`}>{this.props.message.author}</Avatar>} />
            </div>
            
        )
    }
}


export default Message