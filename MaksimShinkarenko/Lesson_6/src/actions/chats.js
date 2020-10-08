export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UNFIRE = 'CHATS_UNFIRE';

export const chatsFireAction = (chatId) => ({
    type: CHATS_FIRE,
    payload: chatId,
})

export const chatsUnfireAction = (chatId) => ({
    type: CHATS_UNFIRE,
    payload: chatId,
})

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