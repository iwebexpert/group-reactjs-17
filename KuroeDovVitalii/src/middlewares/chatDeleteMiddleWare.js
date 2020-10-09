import { chatDeleteAction, CHATS_DELETE_INFORM } from 'actions/chats'

export const chatAddMiddleWare = store => next => action => {
    console.log(store)
    if (action.type === CHATS_DELETE_INFORM) {
        store.dispatch(chatDeleteAction({
            ...action.payload
        }))
    }

    return next(action)
}