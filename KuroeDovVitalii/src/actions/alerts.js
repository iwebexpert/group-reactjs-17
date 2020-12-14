export const ALERT_LOAD = "ALERT_LOAD"
export const ALERT_SEND = "ALERT_SEND"
export const ALERT_CLOSE = "ALERT_CLOSE"

export const alertLoadAction = () => ({
    type: ALERT_LOAD,
})

export const alertSendAction = (message) => ({
    type: ALERT_SEND,
    payload: message,
})

export const alertCloseAction = () => ({
    type: ALERT_CLOSE,
})
