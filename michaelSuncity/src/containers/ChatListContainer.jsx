import React from 'react';
import {connect} from 'react-redux';

import {ChatList} from '../components/ChatList';
import {chatsLoadAction} from '../actions/chats';
import {push} from 'connected-react-router';

class ChatListContainerClass extends React.Component {

    componentDidMount(){
        const {chatsLoadAction, chats} = this.props;
        if(!chats.length){
            chatsLoadAction();
        }
    }

    redirectToUrl = (url) => {
        this.props.redirect(url);
    }

    handleChatsReload = () => {
        this.props.chatsLoadAction();
    }

    render() {
    const {chats, isLoading, isError} = this.props;
        return (
            <ChatList 
            chats = {chats}
            isLoading = {isLoading}
            isError = {isError}  
            onSend = {this.redirectToUrl} 
            handleChatsReload = {this.handleChatsReload}
            />
        );
    }
}

function mapStateToProps(state, ownProps){

    const chats = state.chats.entries;
   

    return {
        chats,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    };
}

function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        redirect: (url) => dispatch(push(`${url}`)),
    };
}

export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListContainerClass);