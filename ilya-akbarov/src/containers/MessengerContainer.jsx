import React, {Component} from 'react'
import {connect} from 'react-redux'

import ChatsPage from '../pages/Chats'
import { profileLoadAction } from '../actions/profile'
import {
  chatsLoadAction,
  chatsMessageSendAction,
  chatAddAction,
  chatUnfireAction
} from '../actions/chats'
import {push} from 'connected-react-router'

class MessengerContainerClass extends Component {
  
  componentDidMount() {
    if (!this.props.chats.length) {
      this.props.chatsLoadAction()
    }
  }
  
  
  onSubmit = (message) => {
    const {chatId} = this.props
    this.props.chatsMessageSendAction({
      ...message,
      chatId
    })
  }
  
  handleChatAdd = () => {
    const { chats, redirect } = this.props
    const chatId = chats.length + 1
    this.props.chatAddAction(
      chatId,
      `Chat ${chatId}`
    )
    redirect(chatId);
  }
  
  handleChatOpen = (chat) => {
    if (chat.unread) {
      this.props.chatUnfireAction(chat.id)
    }
    this.props.redirect(chat.id)
  }
  
  render() {
    const {chats, messages, username} = this.props
    
    return (
      <ChatsPage
        chats={chats}
        messages={messages}
        onSubmit={this.onSubmit}
        username={username}
        handleChatAdd={this.handleChatAdd}
        handleChatOpen={this.handleChatOpen}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.entries
  const profile = state.profile.entries
  const {match} = ownProps
  
  let messages = null
  
  if (match && chats[match.params.id]) {
    messages = chats[match.params.id].messages
  }
  
  const chatsArray = Object.keys(chats).map(key => ({
    name: chats[key].name,
    id: chats[key].id,
    unread: chats[key].unread
  }))
  
  return {
    chats: chatsArray,
    messages,
    chatId: match.params.id || null,
    username: profile.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chatsLoadAction: () => dispatch(chatsLoadAction()),
    chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
    profileLoadAction: () => dispatch(profileLoadAction()),
    chatAddAction: (chatId, name) => dispatch(chatAddAction(chatId, name)),
    redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
    chatUnfireAction: (chatId) => dispatch(chatUnfireAction(chatId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessengerContainerClass)
