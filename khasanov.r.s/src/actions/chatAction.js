import {createAction} from 'redux-api-middleware';

//export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UN_FIRE = 'CHATS_UN_FIRE';

// export const chatsLoadAction = () => createAction({
//     endpoint: 'http://localhost:3000/chats?_embed=messages',
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
//     types: [
//         CHATS_LOAD_REQUEST,
//         CHATS_LOAD_SUCCESS,
//         CHATS_LOAD_FAILURE,
//     ]
// });
export const chatsLoadRequestAction = () => ({
    type: CHATS_LOAD_REQUEST
});
export const chatsLoadSuccessAction = (data) => ({
    type: CHATS_LOAD_SUCCESS,
    payload: data,
});
export const chatsLoadFailureAction = (error) => ({
    type: CHATS_LOAD_FAILURE,
    payload: error,
});
export const chatsLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadRequestAction());
            const result = await fetch('http://localhost:3000/chats?_embed=messages');
            dispatch(chatsLoadSuccessAction(await result.json()))
        } catch (error) {
            dispatch(chatsLoadFailureAction(error));
        }
    }
};
export const chatsMessageSendAction = (message) => {
    return {
        type: CHATS_MESSAGE_SEND,
        payload: message,
    }
};
export const chatsAddAction = (chatId, title) => {
    return {
        type: CHATS_ADD,
        payload: {
            chatId,
            title
        },
    }
};
export const chatsFireAction = (chatId) => {
    return {
        type: CHATS_FIRE,
        payload: {
            fireChatId: chatId
        },
    }
};
export const chatsUnFireAction = (chatId) => {
    return {
        type: CHATS_UN_FIRE,
        payload: {
            unFireChatId: chatId
        },
    }
};