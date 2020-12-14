import { alertCloseAction, ALERT_SEND } from "actions/alerts"

let timeoutId = 0

export const alertMiddleWare = (store) => (next) => (action) => {
    if (action.type === ALERT_SEND) {
        const { value, type, isSelect, messageId } = action.payload
        const dict = { error: "error", warning: "warning", inform: "inform" }
        action.payload = {
            text: value,
            status: true,
            type: dict[type] || "inform",
            id: messageId,
            isSelect,
        }

        if (!action.payload.isSelect) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                store.dispatch(alertCloseAction())
            }, 4000)
        }
    }

    return next(action)
}
