import { CHATS_MESSAGE_DELETE } from "actions/chats"
import { alertSendAction } from "actions/alerts"

export const deleteMessageMiddleWare = (store) => (next) => (action) => {
    if (action.type === CHATS_MESSAGE_DELETE) {
        store.dispatch(
            alertSendAction({
                value: `Сообщение удалено`,
                type: "inform",
                isSelect: false,
                messageId: "",
            })
        )
    }

    return next(action)
}
