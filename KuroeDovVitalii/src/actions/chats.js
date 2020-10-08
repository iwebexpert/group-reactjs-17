export const CHATS_LOAD = 'CHATS_LOAD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const CHATS_MESSAGE_DELETE = 'CHATS_MESSAGE_DELETE'
export const PROFILE_LOAD = 'PROFILE_LOAD'

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

