import React from "react";
import {connect} from 'react-redux';
import {nanoid} from "nanoid";
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoadAction, chatsMessageAction, chatsAddAction, chatsFireAction} from 'actions/chats';

class MessengerContainerClass extends React.Component {
    componentDidMount() {
        const {chatsLoadAction, chats} = this.props;
        if (!chats.length)
            chatsLoadAction();
    }

    handleChatAdd = (chat) => {
        chat.id = this.props.chats.length;
        chat.fire = false;
        const {chatsAddAction, redirect} = this.props;
        chatsAddAction(chat);
        redirect(chat.id);
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.chatId = this.props.chatId;
        const {chatsMessageAction} = this.props;
        chatsMessageAction(message);
    };

    handleChatsReload = () => {
        this.props.chatsLoadAction();
    };

    render() {
        const {chats, messages, isLoading, isError} = this.props;
        return (
            <Messenger chats={chats}
                       messages={messages}
                       isLoading={isLoading}
                       isError={isError}
                       handleMessageSend={this.handleMessageSend}
                       handleChatAdd={this.handleChatAdd}
                       handleChatsReload={this.handleChatsReload}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    const chatsArray = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArray.push({title: chats[key].title, id: chats[key].id, fire: chats[key].fire});
        }
    }

    return {
        chats: chatsArray,
        messages,
        chatId: match ? match.params.id : null,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageAction: (message) => dispatch(chatsMessageAction(message)),
        chatsAddAction: (chat) => dispatch(chatsAddAction(chat)),
        redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
    };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);