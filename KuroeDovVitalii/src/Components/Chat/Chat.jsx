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
            }, id, numSelectedChat))
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

    componentDidUpdate(prevProps, prevState) {

        const { numSelectedChat } = this.props

        if (!prevProps.chats[numSelectedChat]) {
            return
        }

        const { id } = this.props.match.params
        const { name, messages } = this.props.chats[numSelectedChat]
        const lastMessage = messages[messages.length -1]

        if (prevProps.chats[numSelectedChat].messages.length < messages.length && lastMessage.name === 'me') {
            setTimeout(() => {
                this.handleMessageSend({ name: name, text: `Я ${name}, Чо хош!?`, id: nanoid(4) }, id, numSelectedChat), 2000})
        }
    }

    render() {
        const { id }  = this.props.match.params
        const { numSelectedChat, isLoading } = this.props
        let Messages = <Typography>Выберите чат</Typography>
        
        if (!this.props.chats[numSelectedChat]) {
            return <div>Loading...</div>
        }

        const avatar = this.props.chats[numSelectedChat].id
        const currentChat = this.props.chats[numSelectedChat].messages 

        if (id !== undefined && this.props.chats) {
            Messages = currentChat.map( (item) => 
                <Message 
                    key={ item.id } 
                    avatar={ avatar } 
                    handleAlert={ this.handleAlert } 
                    message={ item } />)
        }
        return(
            <section className="chat">
                <div className="message-list">
                    { Messages }
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