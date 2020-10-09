import { CHATS_MESSAGE_SEND, chatsMessageSendAction } from '../actions/chats'

const timers = {}

export const botMiddleware = store => next => action => {
  if (action.type === CHATS_MESSAGE_SEND) {
    const { author, chatId } = action.payload
    
    if (author !== 'Bot') {
      if (timers[chatId]) {
        clearTimeout(timers[chatId])
      }
  
      timers[chatId] = setTimeout(() => {
        store.dispatch(chatsMessageSendAction({
          author: 'Bot',
          text: 'Hello',
          chatId
        }))
      }, 4000)
    }
  }
  return next(action)
}
