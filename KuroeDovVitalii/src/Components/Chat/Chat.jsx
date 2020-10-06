import React, { Component } from 'react'
import Message from '../Message/Message'
import { IconButton, TextField, Typography } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
import { nanoid } from 'nanoid'
class Chat extends Component {
    constructor(props) {
        super(props)
        this.addMessage = props.addMessage.bind(this)
        this.handleAlert = props.handleAlert.bind(this)
    }

    state = {
        input: '',
        messages: []
    }
    
    handleSendMessage = (value) => {
        const { id } = this.props.match.params
        this.setState({ input: '' }, this.addMessage({ name: 'me', text: value, id: nanoid(4) }, id))
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
        const { id } = this.props.match.params
        const { numSelectedChat } = this.props
        const { name, messages } = this.props.chats[numSelectedChat]
        const lastMessage = messages[messages.length -1]

        if(prevProps.chats[numSelectedChat].messages.length < messages.length && lastMessage.name === 'me'){
            setTimeout(() => {
                this.addMessage({ name: name, text: `Я ${name}, Чо хош!?`, id: nanoid(4) }, id), 2000})
        }
    }

    render() {
        console.log(this.props)

        const { id }  = this.props.match.params
        const { numSelectedChat } = this.props
        let Messages = <Typography>Выберите чат</Typography>
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