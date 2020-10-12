import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter, push } from 'connected-react-router'
import { history } from '../store'

import App from '../Components/App/App'
import { chatsLoadAction, chatsMessageDeleteInformAction, chatsAddInformAction } from '../actions/chats'
import { profileLoadAction, profileChangeNameAction, usersLoadAction } from '../actions/profile'
import { alertLoadAction, alertSendAction, alertCloseInformAction, alertSendInformAction } from 'actions/alerts'


class AppContainerClass extends Component {

    componentDidMount() {
        const { 
            chats, 
            profile, 
            users, 
            popup, 
            alertLoadAction, 
            chatsLoadAction, 
            profileLoadAction, 
            usersLoadAction 
        } = this.props
        
        if (!chats.length) {
            chatsLoadAction()
        }

        if (!profile.length || !users.length || !popup.length ) {
            profileLoadAction()
            usersLoadAction()
            alertLoadAction()
        }
    }

    handleDelete = (data) => {
        this.props.chatsMessageDeleteInformAction(data)
    }

    handleNewChat = (data) => {
        const { chatsAddInformAction } = this.props
        chatsAddInformAction(data)
        // this.handleChatRedirect(data.id)
    }

    handleChatRedirect = (newChatId) => {
        console.log(newChatId, this.props)
        const { chats, redirect } = this.props
        let chatId  = chats[newChatId].id
        redirect(chatId)
    }

    handleShowAlert = (value, type = 'inform', isSelect = false, messageId) => {
        this.props.alertSendInformAction(value, type, isSelect, messageId)
    }

    handleCloseAlert = (value) => {
        this.props.alertCloseInformAction(value)
    }

    handleNameChange = (value) => {
        this.props.profileChangeNameAction(value)
    }

    render() {
        return (
            <ConnectedRouter history={ history }>     
                <App 
                    { ...this.props } 
                    handleCloseAlert={ this.handleCloseAlert }
                    handleShowAlert={ this.handleShowAlert }
                    handleDelete={ this.handleDelete } 
                    handleNameChange={ this.handleNameChange }
                    handleNewChat={ this.handleNewChat } />
            </ConnectedRouter>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const { selected, currentChatName, loading } = state.chats
    const { popup } = state.alert
    const { profile, users } = state.profile
    const { chatId } = state 
    const { match } = ownProps

    return {
        chats,
        popup,
        profile,
        currentChatName,
        selected,
        users,
        chatId,
        loading
        // chatId: match ? match.params.id : null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageDeleteInformAction: (message) => dispatch(chatsMessageDeleteInformAction(message)),
        profileLoadAction: () => dispatch(profileLoadAction()),
        usersLoadAction: () => dispatch(usersLoadAction()),
        profileChangeNameAction: (name) => dispatch(profileChangeNameAction(name)),
        chatsAddInformAction: (data) => dispatch(chatsAddInformAction(data)),
        alertLoadAction: () => dispatch(alertLoadAction()),
        alertCloseInformAction: (value) => dispatch(alertCloseInformAction(value)),
        alertSendInformAction:(data) => dispatch(alertSendInformAction(data)),
        redirect: (chatId) => dispatch(push(`/${chatId}`)),
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)