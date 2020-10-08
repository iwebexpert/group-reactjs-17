import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import App from '../Components/App/App'
import { chatsLoadAction, chatsMessageDeleteAction } from '../actions/chats'
import { profileLoadAction } from '../actions/profile'
import { nanoid } from 'nanoid'

class AppContainerClass extends Component {

    componentDidMount() {
        console.log(this.props)
        const { chats, profile } = this.props
        if (!chats.length || !profile.length ) {
            this.props.chatsLoadAction()
            this.props.profileLoadAction()
        }
        
    }

    handleDelete = (message) => {
        console.log(message)
        this.props.chatsMessageDeleteAction(message)
    }


    render() {
        const { chats, messages, profile } = this.props
       
        return (
            <>
                <App { ...this.props } profile={profile} handleDelete={this.handleDelete} />
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        chatsLoadAction: () => dispatch(chatsLoadAction()),
        chatsMessageDeleteAction: (message) => dispatch(chatsMessageDeleteAction(message)),
        profileLoadAction: () => dispatch(profileLoadAction()),
    }
}

const mapStateToProps = (state, ownProps) => {
    const chats = state.chats.entries
    const profile = state.profile.profile
    const { match } = ownProps

    let messages = null

    if(match && chats[match.params.id]) {
        messages = chats[match.params.id].messages
    }
    return {
        chats,
        messages,
        profile,
        chatId: match ? match.params.id : null
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)