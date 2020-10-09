import React from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';

import {AddChat} from '../components/AddChat';
import {chatsLoadAction, chatsAddAction} from '../actions/chats';
import {push} from 'connected-react-router';

class AddChatContainerClass extends React.Component {

    componentDidMount(){
        const {chatsLoadAction, chats} = this.props;
        if(!chats.length){
            chatsLoadAction();
        }
    }

    handleAddChat = (chat) => {
        chat.id = this.props.chats.length;
        this.props.chatsAddAction(chat);
        this.props.redirect(chat.id);
    }

   
    render() {
    const {chats} = this.props;
        return (
            <AddChat chats = {chats}  onSend = {this.handleAddChat}/>
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
        chatsAddAction: (chat) => dispatch(chatsAddAction(chat)),
        redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
    };
}

export const AddChatContainer = connect(mapStateToProps, mapDispatchToProps)(AddChatContainerClass);