import { chatDeleteAction, CHAT_DELETE_INFORM } from 'actions/chats'
import { alertSendInformAction } from 'actions/alerts'

export const chatDeleteMiddleWare = store => next => action => {
    if (action.type === CHAT_DELETE_INFORM) {

        const chats = store.getState()
        const chat = chats.chats.entries[action.payload]

        store.dispatch(chatDeleteAction(action.payload))
        store.dispatch(alertSendInformAction({
            value: `чат "${chat.name}" удален`, 
            type: 'inform', 
            isSelect: false
        }))
    }

    return next(action)
}