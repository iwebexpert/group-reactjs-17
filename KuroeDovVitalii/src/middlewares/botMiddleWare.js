import { CHATS_MESSAGE_SEND, chatsMessageSendAction } from 'actions/chats'
import { nanoid } from 'nanoid'

export const botMiddleWare = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND) {
        const { chatId, id, name, numSelectedChat } = action.payload
        if (name === 'me') {
            setTimeout(() => {
                store.dispatch(chatsMessageSendAction({
                    name: 'БОТ', 
                    text: `Я БОТ, Чо хош!?`, 
                    id: nanoid(4) , 
                    chatId: chatId,
                    numSelectedChat: numSelectedChat 
                }))
            }, 1000)
        }
    }
    return next(action)
}