import { CHATS_MESSAGE_DELETE } from "actions/chats"
import { alertSendInformAction } from "actions/alerts"

export const deleteMessageMiddleWare = (store) => (next) => (action) => {
    if (action.type === CHATS_MESSAGE_DELETE) {
        store.dispatch(
            alertSendInformAction({
                value: `Сообщение удалено`,
                type: "inform",
                isSelect: false,
                messageId: "",
            })
        )
    }

    return next(action)
}
