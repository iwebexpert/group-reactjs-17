import React from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';

import {Messenger} from '../components/Messenger';
import {chatsLoadAction, chatsMessageSendAction} from '../actions/chats';
import { profileLoadAction } from '../actions/profile'


class MessengerContainerClass extends React.Component {
  componentDidMount() {
    this.props.chatsLoadAction();
  }

  handleMessageSend = (message) => {
    message.id = nanoid()
    message.chatId = this.props.chatId;
    this.props.chatsMessageSendAction(message);

    let body = document.querySelector('.messages-list').lastChild;
    body.scrollIntoView();
  };

  render(){
    const {chats, messages, username} = this.props;
    return (
      <Messenger username={username} chats={chats} messages={messages} handleMessageSend={this.handleMessageSend} />
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
      chatsArray.push({ title: chats[key].title, id: chats[key].id })
    }
  }

  return {
    chats: chatsArray,
    messages,
    username: profile.name,
    chatId: match ? match.params.id : null,
  };
}

function mapDispatchToProps(dispatch){
  return {
    chatsLoadAction: () => dispatch(chatsLoadAction()),
    chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
    profileLoadAction: () => dispatch(profileLoadAction()),
  };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);
