import { chatsAddAction, CHATS_ADD } from "actions/chats"
import { alertSendInformAction } from "actions/alerts"

export const chatAddMiddleWare = (store) => (next) => (action) => {
    if (action.type === CHATS_ADD) {
        const newChatName = action.payload.name
        let counter = 0
        const chats = store.getState()

        for (let [key, value] of Object.entries(chats.chats.entries)) {
            if (value.name === newChatName) {
                counter++
                store.dispatch(
                    alertSendInformAction({
                        value: `чат с "${value.name}" уже существует`,
                        type: "error",
                        isSelect: false,
                    })
                )
            }
        }

        if (counter === 0) {
            store.dispatch(chatsAddAction({ ...action.payload }))
            store.dispatch(
                alertSendInformAction({
                    value: `добавлен новый чат с "${newChatName}"`,
                })
            )
        }
    }

    return next(action)
}
