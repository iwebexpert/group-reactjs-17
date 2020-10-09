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

    render() {
    const {chats} = this.props;
        return (
            <ChatList chats = {chats} onSend = {this.redirectToUrl} />
        );
    }
}

function mapStateToProps(state, ownProps){

    const chats = state.chats.entries;
   

    return {
        chats,
    };
}

function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        redirect: (url) => dispatch(push(`${url}`)),
    };
}

export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListContainerClass);