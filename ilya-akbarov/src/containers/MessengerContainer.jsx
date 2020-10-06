import React, {Component} from 'react'
import {connect} from 'react-redux'

import { chatsLoadAction, chatsMessageSendAction, } from '../actions/chats'
import ChatsPage from '../pages/Chats'
import { profileLoadAction } from '../actions/profile'

class MessengerContainerClass extends Component {
  
  componentDidMount() {
    this.props.chatsLoadAction()
  }
  
  onSubmit = (message) => {
    const {chatId} = this.props
    this.props.chatsMessageSendAction({
      ...message,
      chatId
    })
  }
  
  render() {
    const {chats, messages, username} = this.props
    
    return (
      <ChatsPage
        chats={chats}
        messages={messages}
        onSubmit={this.onSubmit}
        username={username}
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
    id: chats[key].id
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
    profileLoadAction: () => dispatch(profileLoadAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessengerContainerClass)
