import React, {Component} from "react";
import {connect} from 'react-redux';

import {ChatsNav} from '../components/ChatsNav';
import {chatsLoadAction} from '../actions/chats';

class ChatsnavContainerClass extends Component {
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    render() {
        const {chats} = this.props;
        return (
            <ChatsNav chats={chats} />
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
    }
}

export const ChatsnavContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsnavContainerClass)