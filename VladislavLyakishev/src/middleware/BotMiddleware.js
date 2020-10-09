import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chats'
import {nanoid} from "nanoid"

export const botMiddleware = store => next => action => {
  if (action.type === CHATS_MESSAGE_SEND) {
    const {chatId, author} = action.payload
    if (author !== 'BOT') {
      setTimeout( () => {
        store.dispatch(chatsMessageSendAction({
            chatId,
            id: nanoid(),
            author: 'BOT',
            message: `Уважаемый ${author}, с Вами разгговаривает бот`,
        }))
      }, 1000)
    }
  }
  return next(action)
}




