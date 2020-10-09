export const CHATS_LOAD = 'CHATS_LOAD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const CHAT_ADD = 'CHAT_ADD'
export const CHAT_FIRE = 'CHAT_FIRE'
export const CHAT_UNFIRE = 'CHAT_UNFIRE'

export const chatsLoadAction = () => ({
  type: CHATS_LOAD,
})

export const chatsMessageSendAction = (message) => ({
  type: CHATS_MESSAGE_SEND,
  payload: message,
})

export const chatAddAction = (chatId, name) => ({
  type: CHAT_ADD,
  payload: { chatId, name }
})

export const chatFireAction = (chatId) => ({
  type: CHAT_FIRE,
  payload: { chatId }
})

export const chatUnfireAction = (chatId) => ({
  type: CHAT_UNFIRE,
  payload: { chatId }
})
