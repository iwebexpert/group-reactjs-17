import React from "react";
import {connect} from "react-redux";
import {nanoid} from 'nanoid';

import {Messenger} from '../components/Messenger';
import {chatsLoadAction, chatsMessageSendAction} from "../actions/chatAction";

class MessengerContainerClass extends React.Component {
    componentDidMount() {
        this.props.chatsLoadAction();
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.chatId = this.props.chatId;
        this.props.chatsMessageSendAction(message);
    };

    render() {
        console.log('test', this.props);
        const {chats, messages} = this.props;
        return (
            <Messenger chats={chats} messages={messages} handleMessageSend={this.handleMessageSend}/>
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
        if(chats.hasOwnProperty(key)) {
            chatsArray.push({
                title: chats[key].title,
                id: chats[key].id
            });
        }
    }

    return {
        chats: chatsArray,
        messages,
        chatId: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
    };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);