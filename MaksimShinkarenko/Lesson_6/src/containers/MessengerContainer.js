import React from "react";
import {connect} from 'react-redux';

import {Messenger} from 'components/Messenger';
import {chatsLoadAction, chatsMessageAction, chatsAddAction} from 'actions/chats';
import {nanoid} from "nanoid";

class MessengerContainerClass extends React.Component {
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    handleChatAdd = (chat) => {
        chat.id = this.props.chats.length;
        const {chatsAddAction} = this.props;
        console.log(this.props)
        chatsAddAction(chat);
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.chatId = this.props.chatId;
        const {chatsMessageAction} = this.props;
        chatsMessageAction(message);
    };

    render() {

        const {chats, messages} = this.props;
        return (
            <Messenger chats={chats} messages={messages} handleMessageSend={this.handleMessageSend}
                       handleChatAdd={this.handleChatAdd}/>
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
            chatsArray.push({title: chats[key].title, id: chats[key].id});
        }
    }

    return {
        chats: chatsArray,
        messages,
        chatId: match ? match.params.id : null,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageAction: (message) => dispatch(chatsMessageAction(message)),
        chatsAddAction: (chat) => dispatch(chatsAddAction(chat)),
    }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);