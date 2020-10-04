import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import Chat from '../Components/Chat/Chat'
import { chatsLoadAction, chatsMessageSendAction } from '../actions/chats'

class ChatContainerClass extends Component {
    
    // componentDidMount() {
    //     console.log(this.props)
    //     this.props.chatsLoadAction()
    // }

    render() {
        // console.log(this.props, 'props')
        // const chats 
        const { chats, messages } = this.props
        return (
                <Chat { ...this.props }  />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageSendAction: (message) => dispatch(chatsMessageSendAction(message)),
    }
}

const mapStateToProps = (state, ownProps) => {
    // const chats = state.chats.entries
    const { chats, match } = ownProps

    let messages = null

    if(match && chats[match.params.id]) {
        messages = chats[match.params.id].messages
    }
    return {
        chats,
        messages
    }
}

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainerClass)