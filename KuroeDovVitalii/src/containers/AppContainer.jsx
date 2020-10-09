import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import App from '../Components/App/App'
import { chatsLoadAction, chatsMessageDeleteAction, chatsMessageDeleteInformAction } from '../actions/chats'
import { profileLoadAction, profileChangeNameAction } from '../actions/profile'
import { nanoid } from 'nanoid'

class AppContainerClass extends Component {

    componentDidMount() {
        const { chats, profile } = this.props
        if (!chats.length || !profile.length ) {
            this.props.chatsLoadAction()
            this.props.profileLoadAction()
        }
    }

    handleDelete = (message) => {
        this.props.chatsMessageDeleteInformAction(message)
    }

    handleNameChange = (value) => {
        this.props.profileChangeNameAction(value)
    }

    render() {
        const { chats, messages, profile } = this.props
       
        return (
            <>
                <App { ...this.props } profile={profile} handleDelete={this.handleDelete} handleNameChange={this.handleNameChange} />
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageDeleteInformAction: (message) => dispatch(chatsMessageDeleteInformAction(message)),
        profileLoadAction: () => dispatch(profileLoadAction()),
        profileChangeNameAction: (name) => dispatch(profileChangeNameAction(name)),
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const profile = state.profile.profile
    const { match } = ownProps
   
    return {
        chats,
        profile,
        chatId: match ? match.params.id : null
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)