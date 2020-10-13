import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Chat from 'components/Chat/Chat'
import { chatsMessageSendAction, deleteChatMessageAction } from 'actions/chats'

class ChatContainerClass extends Component {
    
    handleMessageSend = (message, id, numSelectedChat) => {
        message.chatId = id
        message.numSelectedChat = numSelectedChat
        this.props.chatsMessageSendAction(message)
    }

    handleDeleteChatMessage = (chatId) => {
        this.props.deleteChatMessageAction(chatId)
    }

    render() {
        return (
            <>
                <Chat 
                { ...this.props } 
                handleMessageSend={ this.handleMessageSend } 
                handleDeleteChatMessage={ this.handleDeleteChatMessage } />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
        deleteChatMessageAction: (chatId) => dispatch(deleteChatMessageAction(chatId))
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const chats = state.chats.entries
    const { match } = ownProps
    const { profile } = state.profile

    return {
        chats,
        profile,
        chatId: match ? match.params.id : null
    }
}

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainerClass)