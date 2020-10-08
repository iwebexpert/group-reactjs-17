import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Chat from '../Components/Chat/Chat'
import { chatsLoadAction, chatsMessageSendAction, chatsMessageDeleteAction,  } from '../actions/chats'
import { nanoid } from 'nanoid'
class ChatContainerClass extends Component {
    
    componentDidMount() {
        const { chats,  } = this.props
        if (!chats.length ) {
            this.props.chatsLoadAction()
        }
    }
    
    handleMessageSend = (message, id, numSelectedChat) => {
        message.chatId = id
        message.numSelectedChat = numSelectedChat
        this.props.chatsMessageSendAction(message)
    }

    handleDeleteMessage = (value) => {
        console.log(value)
    }

    hanldeCloseAlert = (value) => {
        console.log(value)
    }

    render() {
        console.log(this.props)
        const { chats, messages } = this.props
       
        return (
            <>
                <Chat { ...this.props } handleMessageSend={this.handleMessageSend} />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
        chatsMessageDeleteAction: (message) => dispatch(chatsMessageDeleteAction(message)),
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const { match } = ownProps

    let messages = null

    if(match && chats[match.params.id]) {
        messages = chats[match.params.id].messages
    }
    return {
        chats,
        messages,
        chatId: match ? match.params.id : null
    }
}

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainerClass)