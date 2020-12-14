import { connect } from "react-redux"
import { push } from "connected-react-router"
import ChatList from "components/ChatList/ChatList"

import { selectChatAction, chatDeleteAction } from "actions/chats"

const mapDispatchToProps = {
    deleteChat: chatDeleteAction,
    selectChat: selectChatAction,
    redirect: push,
}

const mapStateToProps = (store) => {
    const chats = store.chats.entries
    const { selected } = store.chats

    return {
        chats,
        selected,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
