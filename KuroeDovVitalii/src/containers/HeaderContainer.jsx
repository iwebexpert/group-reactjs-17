import { connect } from "react-redux"
import Header from "components/Header/Header"
import {
    selectChatAction,
    chatDeleteAction,
    chatsAddAction,
} from "actions/chats"
import { profileChangeNameAction } from "actions/profile"

const mapStateToProps = (store, ownProps) => {
    const { profile, users } = store.profile
    const { chatName } = ownProps

    return {
        chatName,
        profile,
        users,
        title: "React GB",
    }
}

const mapDispatchToProps = {
    deleteChat: chatDeleteAction,
    selectChat: selectChatAction,
    changeName: profileChangeNameAction,
    newChat: chatsAddAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
