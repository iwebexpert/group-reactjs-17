import { connect } from "react-redux"
import Header from "components/Header/Header"

import {
    selectChatAction,
    chatDeleteAction,
    chatsAddAction,
} from "actions/chats"
import { profileChangeNameAction } from "actions/profile"

const mapDispatchToProps = {
    deleteChat: chatDeleteAction,
    selectChat: selectChatAction,
    changeName: profileChangeNameAction,
    newChat: chatsAddAction,
}

const mapStateToProps = (store, ownProps) => {
    const chats = store.chats.entries
    const { selected } = store.chats
    const { profile, users } = store.profile
    const { chatName } = ownProps

    return {
        chats,
        selected,
        chatName,
        profile,
        users,
        title: "React GB",
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
