import React, { Component } from 'react'
import Message from '../Message/Message'
import { Paper, Button, IconButton, TextField, Typography } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
import { nanoid } from 'nanoid'

class Chat extends Component{
    state = {
        input : '',
        messages: []
    }

    timeoutId = 0 

    handleSendMessage = (value) => {
        this.props.addToChat({  text: value, author: 'me', id: nanoid(4) })
        this.setState({input: ''})
    }

    componentDidUpdate(prevProps, prevState) {
        const currentMessage = this.props.chat
        const lastMessage = currentMessage[currentMessage.length -1]

        if(prevProps.chat.length < this.props.chat.length && lastMessage.author === 'me'){
            this.timeoutId = setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    messages: [...this.state.messages, {author: 'Бот', text: `Бот компот`} ]
                }),
                    this.props.addToChat({author: 'Бот', text: "боткомпот", id: nanoid(4)})

                )
            }, 1000)      
        }
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
        let messages = <Typography>No Chats</Typography>

        if(!this.props.chat.length == 0) {
            messages = this.props.chat.map( (item, idx) => 
                <Message key={idx} message={item} />)
        }

        return(
            <section className="chat">
                <div className="message-list">
                    { messages }
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
                        onClick={ () => this.handleClick(this.state.input) }>
                            <SendIcon/>
                    </IconButton>
                </div>
            </section>
        )
    }
}

export default Chat