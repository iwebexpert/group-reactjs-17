import { chatsMessageDeleteAction, CHATS_MESSAGE_DELETE_INFORM } from 'actions/chats'

export const deleteMessageMiddleWare = store => next => action => {
    if (action.type === CHATS_MESSAGE_DELETE_INFORM) {
        store.dispatch(chatsMessageDeleteAction({
            ...action.payload
        }))
    }

    return next(action)
}