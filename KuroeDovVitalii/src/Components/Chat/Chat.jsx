import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Message from 'components/Message/Message'
import { IconButton, TextField, Typography, Paper, Divider, Backdrop, CircularProgress } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
import DeleteIcon from '@material-ui/icons/Delete'
import ScrollableFeed from 'react-scrollable-feed'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.handleAlert = props.handleAlert.bind(this)
        this.handleMessageSend = props.handleMessageSend.bind(this)
    }

    state = {
        input: '',
        open: true,
    }
    
    handleSendMessage = (message) => {
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
            if (event.keyCode === 13) {
                this.handleSendMessage(this.state.input)
            }    
        }
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    handleDeleteChatMessage = () => {
        this.props.handleDeleteChatMessage(this.props.chatId)
    }
    
    setOpen = (value) => {
        console.log(value)
        this.setState({ open: value })
    }

    handleClose = () => {
        this.setOpen(false);
    }

    handleToggle = () => {
        this.setOpen(!this.state.open);
    }

    render() {
        const { id }  = this.props.match.params
        const { chatId, chats } = this.props
        const { firstName } = this.props.profile
        let messages = <Typography className="chat__text" >Выберите чат</Typography>
        
        if (!this.props.chats) {
            return <Backdrop className="backdrop" open={this.state.open} onClick={this.handleClose}>
                        <Typography display="block" variant="h2">Грузим Чаты... </Typography>
                        <CircularProgress color="inherit" size="10rem"/>
                    </Backdrop>
        }

        if (id !== undefined && chats && chatId && chats[chatId]) {
            const avatar = chats[chatId].avatar
            const currentChat = chats[chatId].messages 
            messages = currentChat.map( (item) => 
                <Message 
                    key={ item.id } 
                    avatar={ avatar } 
                    user={ firstName }
                    masterAvatar={ this.props.profile.avatar }
                    handleAlert={ this.handleAlert } 
                    message={ item } />)
            
        } else {
            <Typography>Выберите чат</Typography>
        }
        return(
            <section className="chat">
                <Paper elevation={5}>
                    <div className="message-list">
                        <ScrollableFeed>
                            { messages }
                        </ScrollableFeed>
                    </div>
                    <Paper elevation={3}>
                        <Divider />
                        <div className="chat-footer">
                            <TextField 
                                disabled={ id === undefined || chats[chatId] === undefined }
                                autoFocus
                                fullWidth
                                size="small"
                                label="введи текст"
                                variant="outlined"
                                value={ this.state.input } 
                                onChange={ this.handleChange } 
                                onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }/>

                            <IconButton
                                disabled={ id === undefined || chats[chatId] === undefined }
                                color="primary" 
                                onClick={ () => this.handleClick(this.state.input) }>
                                    <SendIcon/>
                            </IconButton>
                            
                            <IconButton
                                disabled={ id === undefined || chats[chatId] === undefined }
                                aria-label="delete"
                                className="MuiListItem-root.Mui-selected"
                                color="primary" 
                                onClick= { this.handleDeleteChatMessage }
                                >
                                    <DeleteIcon  />
                            </IconButton>
                        </div>
                    </Paper>
                </Paper>

            </section>
        )
    }
}

export default Chat