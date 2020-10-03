import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux'

import App from '../Components/App/App'
import {chatsLoadAction, chatsMessageSendAction} from '../actions/chats'

class AppContainerClass extends Component {
    render() {
        const {messages} = this.props
        return (
            <App />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state, ownProps)

    // const chats = state.chats.entries
    // const {match} = this.ownProps

    // let messages = null

    // if(match && chats[match.params.id]){
    //     messages = chats[match.params.id].messages
    // }
    return {
        chats: ['1']
    }
}

export const AppContainer = connect(mapStateToProps)(AppContainerClass)