export const CHATS_LOAD = "CHATS_LOAD"
export const CHATS_MESSAGE_SEND = "CHATS_MESSAGE_SEND"
export const CHATS_MESSAGE_DELETE = "CHATS_MESSAGE_DELETE"
export const PROFILE_LOAD = "PROFILE_LOAD"
export const CHATS_ADD = "CHATS_ADD"
export const CHAT_DELETE = "CHAT_DELETE"
export const CHAT_SELECT = "CHAT_SELECT"
export const CHAT_MESSAGE_ALERT = "CHAT_MESSAGE_ALERT"
export const CHAT_MESSAGES_DELETE = "CHAT_MESSAGES_DELETE"

export const profileLoadAction = () => ({
    type: PROFILE_LOAD,
})

export const chatsLoadAction = () => ({
    type: CHATS_LOAD,
})

export const chatsMessageSendAction = (chatId, message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: { chatId, message },
})

export const chatsMessageDeleteAction = (chatId, messageId) => ({
    type: CHATS_MESSAGE_DELETE,
    payload: { chatId, messageId },
})

export const chatsAddAction = (data) => ({
    type: CHATS_ADD,
    payload: data,
})

export const chatDeleteAction = (chatId) => ({
    type: CHAT_DELETE,
    payload: chatId,
})

export const selectChatAction = (chatId) => ({
    type: CHAT_SELECT,
    payload: chatId,
})

export const deleteChatMessageAction = (chatId) => ({
    type: CHAT_MESSAGES_DELETE,
    payload: chatId,
})
