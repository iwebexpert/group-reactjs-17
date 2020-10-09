import React from "react";
import {connect} from "react-redux";
import {nanoid} from 'nanoid';
import {push} from 'connected-react-router';

import {Messenger} from '../components/Messenger';
import {chatsLoadAction, chatsMessageSendAction, chatsAddAction, chatsUnFireAction} from "../actions/chatAction";

class MessengerContainerClass extends React.Component {
    componentDidMount() {
        if (!this.props.chats.length) {
            this.props.chatsLoadAction();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.chatId && this.props.chats[this.props.chatId].fire) {
            this.props.chatsUnFireAction(this.props.chatId);
        }
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.chatId = this.props.chatId;
        this.props.chatsMessageSendAction(message);
    };

    handleChatAdd = (chat) => {
        const {lastId} = this.props;
        const {title} = chat;
        this.props.chatsAddAction(lastId, title);
        this.props.redirect(lastId);
    };

    render() {
        console.log('test', this.props);
        const {chats, messages} = this.props;
        return (
            <Messenger
                chats={chats}
                messages={messages}
                handleMessageSend={this.handleMessageSend}
                handleChatAdd={this.handleChatAdd}
                redirect={this.props.redirect}
            />
        );

    }
}


function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps', state, ownProps);
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    const chatsArray = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArray.push({
                title: chats[key].title,
                id: chats[key].id,
                fire: chats[key].fire,
            });
        }
    }

    const lastId = Object.keys(chats).length

    return {
        chats: chatsArray,
        messages,
        chatId: match ? match.params.id : null,
        lastId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
        chatsAddAction: (chatId, title) => dispatch(chatsAddAction(chatId, title)),
        redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
        chatsUnFireAction: (chatId) => dispatch(chatsUnFireAction(chatId)),
    };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);