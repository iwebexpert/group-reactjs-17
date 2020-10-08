import {nanoid} from "nanoid";

import {CHATS_MESSAGE_SEND, chatsMessageAction} from 'actions/chats';

export const botMiddleware = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND) {
        const {chatId, author} = action.payload;

        if (author!== 'Bot') {
            setTimeout(() => {
                store.dispatch(chatsMessageAction({id: nanoid(), chatId, text: `Hi, ${author}! Это бот...`, author: 'Bot'}))
            }, 1000)
        }
    }

    return next(action);
}