import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import App from '../Components/App/App'
import { chatsLoadAction, chatsAddAction, chatsMessageDeleteInformAction } from '../actions/chats'
import { profileLoadAction, profileChangeNameAction, usersLoadAction } from '../actions/profile'
import { nanoid } from 'nanoid'

class AppContainerClass extends Component {

    componentDidMount() {
        const { chats, profile , users, chatsLoadAction, profileLoadAction, usersLoadAction } = this.props
        if (!chats.length || !profile.length || !users.length ) {
            chatsLoadAction()
            profileLoadAction()
            usersLoadAction()
        }
    }

    handleDelete = (message) => {
        this.props.chatsMessageDeleteInformAction(message)
    }
    handleNewChat = (data) => {
        const { newChatId, chatsAddAction } = this.props
        chatsAddAction(newChatId, data)
    }

    handleNameChange = (value) => {
        this.props.profileChangeNameAction(value)
    }

    render() {
        const { chats, profile, users } = this.props
       
        return (
            <>
                <App { ...this.props } 
                    profile={ profile }
                    users={ users } 
                    handleDelete={ this.handleDelete } 
                    handleNameChange={ this.handleNameChange }
                    handleNewChat={ this.handleNewChat } />
            </>
        )
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
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const { profile, users } = state.profile
    const { match } = ownProps
    const newChatId = Object.keys(chats).length+1

    return {
        chats,
        profile,
        newChatId,
        users,
        chatId: match ? match.params.id : null
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)