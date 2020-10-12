import React, {Component} from "react";
import {connect} from 'react-redux';
import {nanoid} from "nanoid";
import {Messenger} from '../components/Messenger';
import {chatsLoadAction, chatsMessageSendAction} from '../actions/chats';

class MessengerContainerClass extends Component {
    componentDidMount() {
        const {chatsLoadAction, chats} = this.props;
        if (!chats.length) {
            chatsLoadAction();
        }
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.chatId = this.props.chatId;
        this.props.chatsMessageSendAction(message)
    };


    render() {
        const {messages, isError, isLoading} = this.props;

        return (
            <Messenger messages={messages}
                       handleMessageSend={this.handleMessageSend}
                       isError={isError}
                       isLoading={isLoading}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {

    const chats = state.chats.entries;
    const {match} = ownProps;
    let messages = [];
    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages
    };
    return {
        messages,
        chatId: match ? match.params.id : null,
        chats,
        isLoading: state.chats.loading,
        isError: state.chats.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
    }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)