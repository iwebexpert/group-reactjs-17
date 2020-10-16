import {nanoid} from 'nanoid';
import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chats';

export const botMiddleware = store => next => action => {
    if(action.type === CHATS_MESSAGE_SEND){
        const {chatId, author} = action.payload;
        //console.log('botMiddleware', chatId, author);
        if(author !== 'Bot'){
            setTimeout(() => {
                if(author !== 'Bot'){
                    store.dispatch(chatsMessageSendAction({id: nanoid(), chatId, text: `Hi, ${author}! Это бот...`, author: 'Bot'}));
                }
            }, 4000);
        }
    }
    return next(action);
};