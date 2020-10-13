import React from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import {push} from 'connected-react-router';

import {Messenger} from '../components/Messenger';
import {
  chatsLoadAction,
  chatsMessageSendAction,
  chatsAddAction,
  chatUnfireAction
} from '../actions/chats';
import { profileLoadAction } from '../actions/profile'


class MessengerContainerClass extends React.Component {
  componentDidMount() {
    if(!this.props.chats.length){
      this.props.chatsLoadAction();
    }
  }

  handleMessageSend = (message) => {
    message.id = nanoid()
    message.chatId = this.props.chatId;
    this.props.chatsMessageSendAction(message);

    let body = document.querySelector('.messages-list').lastChild;
    body.scrollIntoView();
  };

  handleChatOpen = (chat) => {
    if (chat.unread) {
      this.props.chatUnfireAction(chat.id)
    }
    this.props.redirect(chat.id)
  }

  handleChatAdd = () => {
    const {lastId, chatsAddAction, redirect} = this.props;
    const title = prompt ('Enter chat title', 'New Chat');
    chatsAddAction(lastId, title);
    redirect(lastId);
  };

  render(){
    const {chats, messages, username} = this.props;
    return (
      <Messenger
        username={username}
        chats={chats}
        messages={messages}
        handleMessageSend={this.handleMessageSend}
        handleChatAdd={this.handleChatAdd}
        handleChatOpen={this.handleChatOpen}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.entries;
  const profile = state.profile.entries
  const {match} = ownProps;

  let messages = null;

  if(match && chats[match.params.id]) {
    messages = chats[match.params.id].messages;
  }

  let chatsArray = [];
  for(let key in chats){
    if(chats.hasOwnProperty(key)){
      chatsArray.push({
        title: chats[key].title,
        id: chats[key].id,
        unread: chats[key].unread
      })
    }
  }

  const lastId = Object.keys(chats).length;

  return {
    chats: chatsArray,
    messages,
    username: profile.name,
    chatId: match ? match.params.id : null,
    lastId,
  };
}

function mapDispatchToProps(dispatch){
  return {
    chatsLoadAction: () => dispatch(chatsLoadAction()),
    chatsAddAction: (newChatId, title) => dispatch(chatsAddAction(newChatId, title)),
    chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
    profileLoadAction: () => dispatch(profileLoadAction()),
    redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
    chatUnfireAction: (chatId) => dispatch(chatUnfireAction(chatId)),
  };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);
