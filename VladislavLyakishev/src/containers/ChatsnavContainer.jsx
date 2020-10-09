import React, {Component} from "react";
import {connect} from 'react-redux';

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
        this.props.chatsAddAction(name)
    }

    render() {
        const {chats} = this.props;
        return (
            <ChatsNav chats={chats} addChat={this.addChatHandler}/>
        );
    }
}

function mapStateToProps(state, ownProps) {

    const chats = state.chats.entries;

    return {
        chats,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsAddAction: (name) => dispatch(chatsAddAction(name))
    }
}

export const ChatsnavContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsnavContainerClass)