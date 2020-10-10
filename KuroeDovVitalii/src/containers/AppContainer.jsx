import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import App from '../Components/App/App'
import { chatsLoadAction, chatsAddAction, chatsMessageDeleteInformAction, chatsAddInformAction } from '../actions/chats'
import { profileLoadAction, profileChangeNameAction, usersLoadAction } from '../actions/profile'
import { alertLoadAction, alertSendAction, alertCloseInformAction, alertSendInformAction } from 'actions/alerts'
import { push } from 'connected-react-router'

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

        if (!chats.length || !profile.length || !users.length || !popup.length ) {
            chatsLoadAction()
            profileLoadAction()
            usersLoadAction()
            alertLoadAction()
        }
    }

    handleDelete = (data) => {
        this.props.chatsMessageDeleteInformAction(data)
    }

    handleNewChat = (data) => {
        const { newChatId, chatsAddInformAction } = this.props
        chatsAddInformAction(newChatId, data)
    }

    handleChatRedirect = (newChatId) => {
        const { chats, redirect } = this.props
        let chatId  = chats[newChatId].id
        // redirect(chatId)
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
        const { profile, users, popup, selected } = this.props
       
        return (
            <>
                <App { ...this.props } 
                    profile={ profile }
                    users={ users } 
                    popup={ popup }
                    handleCloseAlert={ this.handleCloseAlert }
                    handleShowAlert={ this.handleShowAlert }
                    handleDelete={ this.handleDelete } 
                    handleNameChange={ this.handleNameChange }
                    handleNewChat={ this.handleNewChat } />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const { selected, currentChatName } = state.chats
    const { popup } = state.alert
    const { profile, users } = state.profile
    const { match } = ownProps
    const newChatId = Object.keys(chats).length+1

    return {
        chats,
        popup,
        profile,
        currentChatName,
        newChatId,
        selected,
        users,
        chatId: match ? match.params.id : null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageDeleteInformAction: (message) => dispatch(chatsMessageDeleteInformAction(message)),
        profileLoadAction: () => dispatch(profileLoadAction()),
        usersLoadAction: () => dispatch(usersLoadAction()),
        profileChangeNameAction: (name) => dispatch(profileChangeNameAction(name)),
        chatsAddAction: (newChatId, data) => dispatch(chatsAddAction(newChatId, data)),
        chatsAddInformAction: (newChatId, data) => dispatch(chatsAddInformAction(newChatId, data)),
        alertLoadAction: () => dispatch(alertLoadAction()),
        alertCloseInformAction: (value) => dispatch(alertCloseInformAction(value)),
        alertSendInformAction:(data) => dispatch(alertSendInformAction(data)),

        redirect: (chatId) => dispatch(push(`/${chatId}`)),
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)