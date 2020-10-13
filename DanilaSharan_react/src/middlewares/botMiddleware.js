import {nanoid} from 'nanoid';
import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chats';

const timers = {}

export const botMiddleware = store => next => action => {
  if(action.type === CHATS_MESSAGE_SEND){
    const {chatId, author} = action.payload;
    if(author !== 'Bot'){
      if (timers[chatId]) {
        clearTimeout(timers[chatId])
      }

      timers[chatId] = setTimeout(() => {
        store.dispatch(chatsMessageSendAction({
          id: nanoid(),
          chatId,
          text: `Hi, ${author}! Это бот...`,
          author: 'Bot'
        }))
      }, 4000)
    }
  }
  return next(action);
};

