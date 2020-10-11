import {createAction} from 'redux-api-middleware';

export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UNFIRE = 'CHATS_UNFIRE';

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';

export const CHATS_MESSAGE_REQUEST = 'CHATS_MESSAGE_REQUEST';
export const CHATS_MESSAGE_SUCCESS = 'CHATS_MESSAGE_SUCCESS';
export const CHATS_MESSAGE_FAILURE = 'CHATS_MESSAGE_FAILURE';

export const chatsFireAction = (chatId) => ({
    type: CHATS_FIRE,
    payload: chatId,
})

export const chatsUnfireAction = (chatId) => ({
    type: CHATS_UNFIRE,
    payload: chatId,
})

/*export const chatsLoadRequestAction = () => ({
    type: CHATS_LOAD_REQUEST,
});

export const chatsLoadSuccessAction = (data) => ({
    type: CHATS_LOAD_SUCCESS,
    payload: data,
});

export const chatsLoadFailureAction = (error) => ({
    type: CHATS_LOAD_FAILURE,
    payload: error,
});*/

/*export const chatsLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadRequestAction());
            const result = await fetch('http://localhost:3000/chats?_embed=messages');
            dispatch(chatsLoadSuccessAction(await result.json()));
        } catch (error) {
            dispatch(chatsLoadFailureAction(error));
        }
    };
};*/

export const chatsLoadAction = () => createAction({
    endpoint: 'http://localhost:3000/chats?_embed=messages',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [
        CHATS_LOAD_REQUEST,
        CHATS_LOAD_SUCCESS,
        CHATS_LOAD_FAILURE,
    ]});


/*export const chatsMessageRequestAction = () => ({
    type: CHATS_MESSAGE_REQUEST,
});

export const chatsMessageSuccessAction = (data) => ({
    type: CHATS_MESSAGE_SUCCESS,
    payload: data,
});

export const chatsMessageFailureAction = (error) => ({
    type: CHATS_MESSAGE_FAILURE,
    payload: error,
});

export const chatsMessageAction = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsMessageRequestAction());
            const result = await fetch('http://localhost:3000/chats?_embed=messages');
            dispatch(chatsMessageSuccessAction(await result.json()));
        } catch (error) {
            dispatch(chatsMessageFailureAction(error));
        }
    };
};*/

export const chatsMessageAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message,
});

export const chatsAddAction = (chat) => ({
    type: CHATS_ADD,
    payload: chat,
})