import React, { Component } from 'react'
import Message from '../Message/Message'
import { Paper, Button, IconButton, TextField, Typography } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
import { nanoid } from 'nanoid'
class Chat extends Component {

    state = {
        input: '',
        messages: []
    }

    handleSendMessage = (value) => {
        const { id } = this.props.match.params
        this.setState(state => ({
            ...state,
            messages: [...this.state.messages, {name: 'me', text: value} ]
        }))
        this.setState({input: ''})
        this.props.addMessage({name: 'me', text: value, id: nanoid(4)}, id)
    }

    handleClick = (value) => {
        if (this.state.input !== '') {
            this.handleSendMessage(value)
        }
    }

    handleKeyUp = (event) => {
        if (this.state.input !== '') {
            if (event.keyCode === 13){
                this.handleSendMessage(this.state.input)
            }    
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }

    componentDidUpdate(prevProps, prevState) {
        const { id } = this.props.match.params
        const currentMessage = this.state.messages
        const lastMessage = currentMessage[currentMessage.length -1]

        if(prevState.messages.length < this.state.messages.length && lastMessage.name === 'me'){
            setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    messages: [...this.state.messages, {name: 'Бот', text: `Бот компот`} ]
                }),
                    this.props.addMessage({name: 'Бот', text: "боткомпот", id: nanoid(4)}, id)

                )
            }, 1000)      
        }
    }

    render() {

        const { id }  = this.props.match.params
        let Messages = <Typography>No Chats</Typography>
        const avatar = this.props.chats[this.props.numSelectedChat].id
        const currentChat = this.props.chats[this.props.numSelectedChat].messages 
        if (id !== undefined && this.props.chats) {
            Messages = currentChat.map( (item) => 
                <Message 
                    key={item.id} 
                    avatar={avatar} 
                    handleAlert={this.props.handleAlert} 
                    message={item} />)
        }

        return(
            <section className="chat">
                <div className="message-list">
                    { Messages }
                </div>
                <div className="chat-footer">
                    <TextField 
                        disabled={id === undefined ? true : false}
                        autoFocus
                        fullWidth
                        size="small"
                        label="введи текст"
                        variant="outlined"
                        value={this.state.input} 
                        onChange={this.handleChange} 
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}/>

                    <IconButton
                        disabled={id === undefined ? true : false}
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