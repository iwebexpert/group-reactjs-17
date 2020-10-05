import React, {Component} from "react";
import {connect} from 'react-redux';

import {Messenger} from '../components/Messenger';
import {chatsLoadAction, chatsMessageSendAction} from '../actions/chats';

class MessengerContainerClass extends Component {
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    render() {
        const {messages} = this.props;
        return (
            <Messenger messages={messages} />
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction()),
    }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)