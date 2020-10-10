import React, { Component } from 'react'
import Message from '../Message/Message'
import { IconButton, TextField, Typography } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
import { nanoid } from 'nanoid'
class Chat extends Component {
    constructor(props) {
        super(props)
        this.handleAlert = props.handleAlert.bind(this)
        this.handleMessageSend = props.handleMessageSend.bind(this)
    }

    state = {
        input: '',
    }
    
    handleSendMessage = (message) => {
        const { numSelectedChat } = this.props
        const { id } = this.props.match.params
        this.setState({ input: '' }, 
        this.handleMessageSend(
            { 
                name: 'me', 
                text: message, 
                id: nanoid(4) 
            }, id, id))
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
        this.setState({ input: event.target.value })
    }

    render() {
        const { id }  = this.props.match.params
        const { chatId, isLoading } = this.props
        let messages = <Typography>Выберите чат</Typography>
        
        if (!this.props.chats) {
            return <div>Loading...</div>
        }

        if (id !== undefined && this.props.chats && this.props.chatId) {
            const avatar = this.props.chats[chatId].id
            const currentChat = this.props.chats[chatId].messages 
            messages = currentChat.map( (item) => 
                <Message 
                    key={ item.id } 
                    avatar={ avatar } 
                    handleAlert={ this.handleAlert } 
                    message={ item } />)
        } else {
            <Typography>Выберите чат</Typography>
        }
        return(
            <section className="chat">
                <div className="message-list">
                    { messages }
                </div>
                <div className="chat-footer">
                    <TextField 
                        disabled={ id === undefined ? true : false }
                        autoFocus
                        fullWidth
                        size="small"
                        label="введи текст"
                        variant="outlined"
                        value={ this.state.input } 
                        onChange={ this.handleChange } 
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }/>

                    <IconButton
                        disabled={ id === undefined ? true : false }
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