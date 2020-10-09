export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_STATUS_FIRE = 'CHATS_STATUS_FIRE'
export const CHATS_STATUS_UNFIRE = 'CHATS_STATUS_UNFIRE'

export const chatsLoadAction = () => ({
    type: CHATS_LOAD,
});

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