import React, {Component} from "react";
import {connect} from 'react-redux';
import {push} from 'connected-react-router'

import {ChatsNav} from '../components/ChatsNav';
import {chatsLoadAction, chatsAddAction} from '../actions/chats';

class ChatsnavContainerClass extends Component {
    componentDidMount() {
        const {chatsLoadAction, chats} = this.props;
        if (!chats.length) {
            chatsLoadAction();
        }
    }

    addChatHandler = (name) => {
        const {redirect} = this.props
        const chatId = this.props.chats.length
        this.props.chatsAddAction(name, chatId)
        redirect(chatId)
    }

    handleChatsReload = () => {
        this.props.chatsLoadAction()
    }

    render() {
        const {chats, isLoading, isError} = this.props;
        return (
            <ChatsNav
              chats={chats}
              addChat={this.addChatHandler}
              isLoading={isLoading}
              isError={isError}
              handleChatsReload={this.handleChatsReload}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {

    const chats = state.chats.entries;

    return {
        chats,
        isLoading: state.chats.loading,
        isError: state.chats.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsAddAction: (name, chatId) => dispatch(chatsAddAction(name, chatId)),
        redirect: (chatId) => dispatch(push(`/chats/${chatId}`))
    }
}

export const ChatsnavContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsnavContainerClass)