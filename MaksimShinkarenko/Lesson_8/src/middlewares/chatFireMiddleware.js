import {CHATS_MESSAGE_SEND_SUCCESS, chatsFireAction, chatsUnfireAction} from 'actions/chats';

export const chatFireMiddleware = store => next => action => {

    if (action.type === CHATS_MESSAGE_SEND_SUCCESS) {
        const {chatId} = action.payload;
        if (chatId !== store.getState().router.location.pathname.split('/').pop())
            store.dispatch(chatsFireAction(chatId));
    }

    if (action.type === '@@router/LOCATION_CHANGE' && action.payload.location.pathname.indexOf('chat') > 0){
        const chatId = action.payload.location.pathname.split('/').pop();
        store.dispatch(chatsUnfireAction(chatId));
    }

    return next(action);
}