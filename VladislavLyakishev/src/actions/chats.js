import {createAction} from 'redux-api-middleware';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_STATUS_FIRE = 'CHATS_STATUS_FIRE';
export const CHATS_STATUS_UNFIRE = 'CHATS_STATUS_UNFIRE';

//CHATS_CONST_REDUX_API_MIDDLEWARE
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';


// Local
// export const chatsLoadAction = () => ({
//     type: CHATS_LOAD,
// });

export const chatsMessageSendAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message,
});

export const chatsAddAction = (name, chatId) => ({
    type: CHATS_ADD,
    payload: {name, chatId},
});

export const chatsToggleFire = (chatIdFire) => ({
    type: CHATS_STATUS_FIRE,
    payload: chatIdFire,
});

export const chatsToggleUnFire = (chatIdFire) => ({
    type: CHATS_STATUS_UNFIRE,
    payload: chatIdFire,
});

// JSON-SERVER
export const chatsLoadAction = () => createAction({
    endpoint: 'http://localhost:3000/chats?_embed=messages',
    method: "GET",
    headers: {'Content-Type': 'application/json'},
    types: [
        CHATS_LOAD_REQUEST,
        CHATS_LOAD_SUCCESS,
        CHATS_LOAD_FAILURE
    ],
});