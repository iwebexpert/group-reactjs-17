import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { nanoid } from 'nanoid';
import { push } from 'connected-react-router';
import { RouteComponentProps } from 'react-router-dom';

import { Messenger } from '@app/components/Messenger';
import { chatsLoadAction, chatsMessageSendAction, chatsAddAction } from '@app/store/chats/actions';
import { Data, RootState } from '@types';
import { asyncLoadProfile } from '@app/store/profile/actions';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

interface AppProps extends RouteComponentProps, StateProps, DispatchProps {
  chats: Data.Chat[];
  text: string;
  messages: any;
  handleMessageSend: any;
  handleChatAdd: any;
}
type AppState = StateProps;

class MessengerContainerClass extends Component<AppProps, AppState> {
  public componentDidMount(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.props.getProfile();
    if (!this.props.chats.length) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.props.getChats();
    }
  }

  private handleMessageSend = (message: Data.Message): void => {
    message.id = nanoid();
    message.chatId = this.props.chatId || '';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.props.chatsMessageSendAction(message);
  };

  public render(): ReactNode {
    const { chats, messages } = this.props;
    return (
      <Messenger chats={chats} messages={messages} handleMessageSend={this.handleMessageSend} />
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps<{ id: string }>) => {
  const chats = state.chats.entries;
  const { match } = ownProps;

  let messages: Data.Message[] | null = null;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (match && chats[match.params.id]) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    messages = chats[match.params.id].messages;
  }

  const chatsArray = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in chats) {
    if (chats[key]) {
      chatsArray.push({ title: chats[key].title, id: chats[key].id });
    }
  }
  const lastId = Object.keys(chats).length;

  return {
    chats: chatsArray,
    messages,
    chatId: match ? match.params.id : null,
    lastId,
  };
};

function mapDispatchToProps(dispatch: ThunkDispatch<any, void, Action>) {
  return {
    getChats: () => dispatch(chatsLoadAction()),
    chatsMessageSendAction: (message: any) => dispatch(chatsMessageSendAction(message)),
    chatsAddAction: (newChatId: any, title: any) => dispatch(chatsAddAction(newChatId, title)),
    redirect: (chatId: number) => dispatch(push(`/chats/${chatId}`)),
    getProfile: () => dispatch(asyncLoadProfile()),
  };
}

export const MessengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessengerContainerClass);
