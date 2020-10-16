export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UNFIRE = 'CHATS_UNFIRE';

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';

export const CHATS_MESSAGE_SEND_REQUEST = 'CHATS_MESSAGE_SEND_REQUEST';
export const CHATS_MESSAGE_SEND_SUCCESS = 'CHATS_MESSAGE_SEND_SUCCESS';
export const CHATS_MESSAGE_SEND_FAILURE = 'CHATS_MESSAGE_SEND_FAILURE';

export const chatsFireAction = (chatId) => ({
    type: CHATS_FIRE,
    payload: chatId,
})

export const chatsUnfireAction = (chatId) => ({
    type: CHATS_UNFIRE,
    payload: chatId,
})

export const chatsLoadRequestAction = () => ({
    type: CHATS_LOAD_REQUEST,
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
            dispatch(chatsLoadSuccessAction(await result.json()));
        } catch (error) {
            dispatch(chatsLoadFailureAction(error));
        }
    };
};

export const chatsMessageSendRequestAction = () => ({
    type: CHATS_MESSAGE_SEND_REQUEST,
});

export const chatsMessageSendSuccessAction = (data) => ({
    type: CHATS_MESSAGE_SEND_SUCCESS,
    payload: data,
});

export const chatsMessageSendFailureAction = (error) => ({
    type: CHATS_MESSAGE_SEND_FAILURE,
    payload: error,
});

export const chatsMessageSendAction = (message) => {
    return async (dispatch) => {
        try {
            console.log("Пытаемся отправить")
            dispatch(chatsMessageSendRequestAction());
            console.log("Пытаемся отправить")
            const result = await fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(message)
            });
            dispatch(chatsMessageSendSuccessAction(await result.json()));
        } catch (error) {
            console.log("Пытаемся отправить")
            dispatch(chatsMessageSendFailureAction(error));
        }
    };
};

export const chatsAddAction = (chat) => ({
    type: CHATS_ADD,
    payload: chat,
})