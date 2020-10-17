export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const CHAT_ADD = 'CHAT_ADD'
export const CHAT_FIRE = 'CHAT_FIRE'
export const CHAT_UNFIRE = 'CHAT_UNFIRE'
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST'
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS'
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE'

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

export const chatsLoadErrorAction = (error) => ({
  type: CHATS_LOAD_FAILURE,
  payload: error,
})

export const chatsLoadRequestAction = () => ({
  type: CHATS_LOAD_REQUEST
})

export const chatsLoadSuccessAction = (chats) => ({
  type: CHATS_LOAD_SUCCESS,
  payload: chats,
})

export const chatsLoadAction = () => async(dispatch) => {
  try {
    dispatch(chatsLoadRequestAction())
    const response = await fetch('http://localhost:3500/chats?_embed=messages')
    const chats = await response.json()
    dispatch(chatsLoadSuccessAction(chats))
  } catch(err) {
    dispatch(chatsLoadErrorAction(err))
  }
}


