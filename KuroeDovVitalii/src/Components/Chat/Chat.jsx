import React, { Component } from 'react'
import Message from '../Message/Message'
import { Paper, Button, IconButton, TextField, Typography } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'

class Chat extends Component{

    state = {
        input : ''
    }

    handleSendMessage = (value) => {
        this.props.addToChat(value)
        this.setState({input: ''})
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }
    handleKeyUp = (event) => {
        if (this.state.input !== '') {
            if (event.keyCode === 13){
                this.handleSendMessage(this.state.input)
            }    
        }
    }

    handleClick = (value) => {
        if (this.state.input !== '') {
            this.handleSendMessage(value)
        }
    }

    render(){
        let Messages = <Typography>No Chats</Typography>


        if(!this.props.chat.length == 0) {
            Messages = this.props.chat.map( (item, idx) => 
                <Message key={idx} message={item} />)
        }
        return(
            <section className="chat">
                <div className="message-list">
                    { Messages }
                </div>
                <div className="chat-footer">
                    <TextField 
                        // disabled={id === undefined ? true : false}
                        autoFocus
                        fullWidth
                        size="small"
                        label="введи текст"
                        variant="outlined"
                        value={this.state.input} 
                        onChange={this.handleChange} 
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}/>

                    <IconButton
                        // disabled={id === undefined ? true : false}
                        color="primary" 
                        onClick={() => this.handleClick(this.state.input)}>
                            <SendIcon/>
                    </IconButton>
                </div>
            </section>
        )
    }
}

export default Chat