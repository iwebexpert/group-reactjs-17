import {CHATS_MESSAGE_SEND, chatsFireAction, chatsMessageSendAction} from "../actions/chatAction";
import {nanoid} from "nanoid";

export const botMiddleware = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND) {
        const {chatId, author} = action.payload;
        if (author !== 'Бот') {
            setTimeout(() => {
                const state = store.getState();

                if (!state.chats.entries.length || !state.chats.entries[chatId]) {
                    return;
                }

                const chatMessages = state.chats.entries[chatId].messages;

                if (!chatMessages.length || !chatMessages[[chatMessages.length - 1]]){
                    return;
                }
                const {author} = chatMessages[chatMessages.length - 1];

                if (author === 'Бот') {
                    return;
                }

                store.dispatch(chatsMessageSendAction(
                    {
                        id: nanoid(),
                        chatId: chatId,
                        text: `Привет, ${author}! Это Бот!`,
                        author: 'Бот'
                    }
                ));

                const locationPath = state.router.location.pathname;
                if (locationPath !== `/chats/${chatId}`) {
                    store.dispatch(chatsFireAction(chatId));
                }



            }, 4000);
        }
    }
    console.log('новый бот', action);
    return next(action);
};