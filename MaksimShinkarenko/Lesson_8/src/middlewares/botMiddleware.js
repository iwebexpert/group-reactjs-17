import {nanoid} from "nanoid";

import {CHATS_MESSAGE_SEND_SUCCESS, chatsMessageSendAction} from 'actions/chats';

export const botMiddleware = store => next => action => {

    if (action.type === CHATS_MESSAGE_SEND_SUCCESS) {
        const {chatId, author} = action.payload;
        const initMessLength = store.getState().chats.entries[chatId].messages.length;
        if (author !== 'Bot') {
            setTimeout(() => {
                const currentMessLength = store.getState().chats.entries[chatId].messages.length;
                if (initMessLength !== currentMessLength - 1)
                    return false; // Что-то ничего интереснее в голову не пришло)
                store.dispatch(chatsMessageSendAction({
                    id: nanoid(),
                    chatId,
                    text: `Hi, ${author}! Это бот...`,
                    author: 'Bot'
                }))
            }, 3000);
        }
    }

    return next(action);
}