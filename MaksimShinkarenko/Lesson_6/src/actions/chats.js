export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';

export const chatsLoadAction = () => ({
    type: CHATS_LOAD,
});

export const chatsMessageAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message,
});

export const chatsAddAction = (chat) => ({
    type: CHATS_ADD,
    payload: chat,
})