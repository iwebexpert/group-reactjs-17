import React from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import {push} from 'connected-react-router';

import {Messenger} from '../components/Messenger';
import {chatsLoadAction, chatsMessageSendAction, chatsAddAction, chatsFireAction} from '../actions/chats';

class MessengerContainerClass extends React.Component {
    componentDidMount(){
        if(!this.props.chats.length){
            this.props.chatsLoadAction();
        }
    }

    handleMessageSend = (message) => {
        message.id = nanoid();
        message.chatId = this.props.chatId;
        this.props.chatsMessageSendAction(message);
    };

    handleChatAdd = () => {
        const {lastId, chatsAddAction, redirect} = this.props;

        const title = prompt('Введите название чата', 'Новый чат');
        chatsAddAction(lastId, title,);
        redirect(lastId);
    };

    handleChatsReload = () => {
        this.props.chatsLoadAction();
    };

    render(){
        // console.log(this.props);
        const {chats, messages, isLoading, isError} = this.props;

        return (
            <Messenger
                chats={chats}
                messages={messages}
                isLoading={isLoading}
                isError={isError}
                handleMessageSend={this.handleMessageSend}
                handleChatAdd={this.handleChatAdd}
                handleChatsReload={this. handleChatsReload}
            />
        );
    }
}

function mapStateToProps(state, ownProps){
    // console.log(state, ownProps);

    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    const chatsArray = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArray.push({title: chats[key].title, id: chats[key].id, fire: chats[key].fire});
        }
    }
    const lastId = Object.keys(chats).length;

    return {
        chats: chatsArray,
        messages,
        chatId: match ? match.params.id : null,
        lastId,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    };
}

function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
        chatsAddAction: (newChatId, title) => dispatch(chatsAddAction(newChatId, title)),
        redirect: (chatId) => dispatch(push(`/chats/${chatId}`)),
    };
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass);