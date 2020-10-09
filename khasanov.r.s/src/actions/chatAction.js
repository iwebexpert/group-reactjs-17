export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UN_FIRE = 'CHATS_UN_FIRE';

export const chatsLoadAction = () => {
    return {type: CHATS_LOAD,}
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