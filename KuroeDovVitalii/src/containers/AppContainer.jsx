import { connect } from "react-redux"
import { push } from "connected-react-router"

import App from "components/App/App"
import { chatsLoadAction, chatsMessageDeleteAction } from "actions/chats"
import {
    profileLoadAction,
    profileChangeNameAction,
    usersLoadAction,
} from "actions/profile"
import { alertLoadAction } from "actions/alerts"

const mapStateToProps = (state) => {
    const chats = state.chats.entries
    const { selected, currentChatName, loading } = state.chats
    const { popup } = state.alert
    const { profile, users } = state.profile

    return {
        chats,
        popup,
        profile,
        currentChatName,
        selected,
        users,
        loading,
    }
}

const mapDispatchToProps = {
    loadChats: chatsLoadAction,
    handleDelete: chatsMessageDeleteAction,
    loadProfile: profileLoadAction,
    loadUsers: usersLoadAction,
    handleNameChange: profileChangeNameAction,
    alertLoad: alertLoadAction,
    redirect: push,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
