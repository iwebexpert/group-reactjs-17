import { chatsAddAction, CHATS_ADD_INFORM } from 'actions/chats'

export const chatAddMiddleWare = store => next => action => {
    console.log(store)
    if (action.type === CHATS_ADD_INFORM) {
        store.dispatch(chatsAddAction({
            ...action.payload
        }))
    }

    return next(action)
}