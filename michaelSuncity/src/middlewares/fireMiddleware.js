import {CHATS_MESSAGE_SEND, chatsFireAction, chatsUnfireAction} from '../actions/chats';


export const fireMiddleware = store => next => action => {
    if(action.type === CHATS_MESSAGE_SEND){
        const {chatId} = action.payload;

        store.dispatch(chatsFireAction(chatId));
    }

    if(action.type === '@@router/LOCATION_CHANGE'){
        const urlArray = action.payload.location.pathname.split('/');
        if(urlArray.find(item => item == 'chats')){
            const chatId = urlArray.pop();

            store.dispatch(chatsUnfireAction(chatId));
        }
    }
    return next(action);
};