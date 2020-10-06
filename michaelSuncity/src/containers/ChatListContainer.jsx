import React from 'react';
import {connect} from 'react-redux';

import {ChatList} from '../components/ChatList';
import {chatsLoadAction} from '../actions/chats';

class ChatListContainerClass extends React.Component {

    componentDidMount(){
        this.props.chatsLoadAction();
    }

    render() {
    const {chats} = this.props;
        return (
            <ChatList chats = {chats} />
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
    };
}

export const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatListContainerClass);