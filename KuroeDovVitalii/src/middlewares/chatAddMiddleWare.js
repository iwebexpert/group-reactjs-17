import { CHATS_ADD } from "actions/chats"
import { alertSendAction } from "actions/alerts"

export const chatAddMiddleWare = (store) => (next) => (action) => {
    if (action.type === CHATS_ADD) {
        const newChatName = action.payload.name
        const chats = store.getState()
        const searchChat = chats.chats.entries.find(
            (item) => item.name === newChatName
        )
        if (searchChat) {
            store.dispatch(
                alertSendAction({
                    value: `чат с "${newChatName}" уже существует`,
                    type: "error",
                    isSelect: false,
                })
            )
            action.payload = {
                newChat: { ...action.payload },
                error: true,
            }
        } else {
            store.dispatch(
                alertSendAction({
                    value: `добавлен новый чат с "${newChatName}"`,
                })
            )
            action.payload = {
                newChat: { ...action.payload },
                error: false,
            }
        }
    }

    return next(action)
}
