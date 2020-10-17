// import {CHATS_MESSAGE_SEND, chatsFireAction, chatsUnfireAction} from 'actions/chats';

// export const fireMiddleware = store => next => action => {

//     if (action.type === CHATS_MESSAGE_SEND) {
//         const {chatId} = action.payload;
//         //console.log(chatId);
//         store.dispatch(chatsFireAction(chatId));
//     }
//     return next(action);
// } 