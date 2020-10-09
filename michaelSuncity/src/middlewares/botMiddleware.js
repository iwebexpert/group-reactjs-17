import {nanoid} from 'nanoid';
import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chats';

export const botMiddleware = store => next => action => {
    if(action.type === CHATS_MESSAGE_SEND){
        const {chatId, author} = action.payload;
        const prevUserMessageId = store.getState().chats.entries[chatId].messages.length - 1;
        //console.log('botMiddleware', chatId, author);
        if(author !== 'Bot'){
            setTimeout(() => {
                if(author !== store.getState().chats.entries[chatId].messages[prevUserMessageId].author){
                    store.dispatch(chatsMessageSendAction({id: nanoid(), chatId, text: `Hi, ${author}! Это бот...`, author: 'Bot'}));
                }
            }, 3000);
        }
    }
    return next(action);
};