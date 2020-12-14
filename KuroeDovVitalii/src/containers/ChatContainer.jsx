import { connect } from "react-redux"
import Chat from "components/Chat/Chat"
import { chatsMessageSendAction, chatsMessageDeleteAction } from "actions/chats"

const mapStateToProps = (store, ownProps) => {
    const chats = store.chats.entries
    const { selected } = store.chats
    const { match } = ownProps
    const { profile } = store.profile

    return {
        chats,
        chat: selected ? chats.find((item) => item.id === selected) : {},
        profile,
        selected,
        chatId: match ? match.params.id : null,
    }
}

const mapDispatchToProps = {
    sendMessage: chatsMessageSendAction,
    deleteMessage: chatsMessageDeleteAction,
    handleMessageSend: chatsMessageSendAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
