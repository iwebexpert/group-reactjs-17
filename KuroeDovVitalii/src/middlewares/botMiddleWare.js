import { CHATS_MESSAGE_SEND, chatsMessageSendAction } from "actions/chats"
import { nanoid } from "nanoid"

import { citates } from "../helpers/citates"

let timeOutId = 0

export const botMiddleWare = (store) => (next) => (action) => {
    if (action.type === CHATS_MESSAGE_SEND) {
        const { chatId, message } = action.payload

        const storeState = store.getState()
        const currentChat = storeState.chats.entries.findIndex(
            (item) => item.id === chatId
        )

        if (message.name === "me") {
            clearTimeout(timeOutId)
            timeOutId = setTimeout(() => {
                store.dispatch(
                    chatsMessageSendAction(chatId, {
                        name: storeState.chats.entries[currentChat].name,
                        text: citates[Math.floor(Math.random() * 10) + 1].text,
                        id: nanoid(4),
                        chatId: chatId,
                        fire: true,
                    })
                )
            }, 2000)
            action.payload = {
                ...action.payload,
                message: {
                    ...action.payload.message,
                    id: nanoid(4),
                    chatId: chatId,
                    fire: false,
                },
            }
        }
    }
    return next(action)
}
