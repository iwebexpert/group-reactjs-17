import { CHAT_DELETE } from "actions/chats"
import { push } from "connected-react-router"
import { alertSendInformAction } from "actions/alerts"

export const chatDeleteMiddleWare = (store) => (next) => (action) => {
    if (action.type === CHAT_DELETE) {
        const chats = store.getState()
        const chat = chats.chats.entries.find(
            (item) => item.id === action.payload
        )

        store.dispatch(
            alertSendInformAction({
                value: `чат "${chat.name}" удален`,
                type: "inform",
                isSelect: false,
            })
        )
        push("/")
    }

    return next(action)
}
