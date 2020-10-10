import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import ChatList from '../Components/ChatList/ChatList'

import { chatDeleteInformAction, selectChatInformAction, selectChatAction } from '../actions/chats'


class ChatListContainerClass extends Component {

    handleChatDelete = (chatId) => {
        console.log(chatId, 'handleChatDelete')
        // this.props.chatDeleteInformAction(chatId)
    } 

    handleSelectChat = (data) => {
        this.props.selectChatAction(data)
    }

    render() {
        return (
            <ChatList 
                selected={ this.props.selected }
                chats={ this.props.chats } 
                handleChatDelete={this.handleChatDelete}
                handleSelectChat={ this.handleSelectChat }
                selectChat={ this.handleCurrentChatName } 
                currentActiveChat={ this.props.currentActiveChat }/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatDeleteInformAction: (chatId) => dispatch(chatDeleteInformAction(chatId)),
        selectChatInformAction: (chatId) => dispatch(selectChatInformAction(chatId)),
        selectChatAction: (data) => dispatch(selectChatAction(data)),

    }
}

const mapStateToProps = (state, ownProps) => {
        const chats = state.chats.entries
        const { selected } = state.chats

    return {
        chats,
        selected,
        
    }
}

export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListContainerClass)