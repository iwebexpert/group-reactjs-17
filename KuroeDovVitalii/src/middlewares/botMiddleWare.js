import { CHATS_MESSAGE_SEND, chatsMessageSendAction } from 'actions/chats'
import { nanoid } from 'nanoid'

import { citates } from '../helpers/citates'

let timeOutId = 0

export const botMiddleWare = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND) {
        const { chatId, id, name, numSelectedChat } = action.payload
        if (name === 'me') {
            clearTimeout(timeOutId)
            timeOutId = setTimeout(() => {
                store.dispatch(chatsMessageSendAction({
                    name: 'БОТ', 
                    text: citates[Math.floor(Math.random() * 10) + 1].text, 
                    id: nanoid(4) , 
                    chatId: chatId,
                    numSelectedChat: numSelectedChat,
                    fire: true
                }))
            }, 2000)
        }
    }
    return next(action)
}