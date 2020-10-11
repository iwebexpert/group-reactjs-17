import { alertCloseAction, alertSendAction, ALERT_SEND_INFORM, ALERT_CLOSE_INFORM } from 'actions/alerts'
import { nanoid } from 'nanoid'

export const alertMiddleWare = store => next => action => {

    if (action.type === ALERT_SEND_INFORM) {
        const { value, type, isSelect, messageId } = action.payload
        let alertType = type
        let status = true
        
        switch (type) {
            case 'error':
                alertType = 'error'
                break;
        
            default: 'inform'
                alertType = 'inform'
                break;
        }

        store.dispatch(alertSendAction({
            text: value,
            status: status,
            type: alertType,
            id: messageId,
            isSelect
        }))

        if (!action.payload.isSelect) {
            setTimeout(() => {store.dispatch(alertCloseAction(false))}, 4000)
        }
    }

    if (action.type === ALERT_CLOSE_INFORM ) {
        store.dispatch(alertCloseAction(action.payload))
    }

    return next(action)
}