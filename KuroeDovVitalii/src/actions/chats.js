export const CHATS_LOAD = 'CHATS_LOAD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const CHATS_MESSAGE_DELETE = 'CHATS_MESSAGE_DELETE'
export const PROFILE_LOAD = 'PROFILE_LOAD'
export const CHATS_MESSAGE_DELETE_INFORM = 'CHATS_MESSAGE_DELETE_INFORM'
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_ADD_INFORM = 'CHATS_ADD_INFORM'
export const CHAT_DELETE = 'CHAT_DELETE'
export const CHATS_DELETE_INFORM = 'CHATS_DELETE_INFORM'


export const profileLoadAction = () => ({
    type: PROFILE_LOAD,
})

export const chatsLoadAction = () => ({
    type: CHATS_LOAD,
})

export const chatsMessageSendAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message
})

export const chatsMessageDeleteAction = (message) => ({
    type: CHATS_MESSAGE_DELETE,
    payload: message
})

export const chatsMessageDeleteInformAction = (message) => ({
    type: CHATS_MESSAGE_DELETE_INFORM,
    payload: message
})

export const chatsAddAction = (data) => ({
    type: CHATS_ADD,
    payload: data,
})

export const chatsAddInformAction = (chatId, data) => ({
    type: CHATS_ADD_INFORM,
    payload: { chatId, data },
})


export const chatDeleteAction = (chatId) => ({
    type: CHAT_DELETE,
    payload: chatId,
})

export const chatDeleteInformAction = (chatId) => ({
    type: CHATS_DELETE_INFORM,
    payload: chatId,
})