import { chatDeleteAction, CHAT_DELETE_INFORM } from 'actions/chats'

export const chatDeleteMiddleWare = store => next => action => {
    if (action.type === CHAT_DELETE_INFORM) {
        store.dispatch(chatDeleteAction(action.payload))
    }

    return next(action)
}