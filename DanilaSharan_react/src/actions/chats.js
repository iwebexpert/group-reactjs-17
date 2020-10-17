export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHAT_FIRE = 'CHAT_FIRE'
export const CHAT_UNFIRE = 'CHAT_UNFIRE'

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';


export const  chatsMessageSendAction = (message) => ({
  type: CHATS_MESSAGE_SEND,
  payload:message,
});

export const  chatsAddAction = (chatId, title) => ({
  type: CHATS_ADD,
  payload: {chatId, title},
});

export const chatFireAction = (chatId) => ({
  type: CHAT_FIRE,
  payload: { chatId }
})

export const chatUnfireAction = (chatId) => ({
  type: CHAT_UNFIRE,
  payload: { chatId }
})

export const chatsLoadRequestAction = () => ({
  type: CHATS_LOAD_REQUEST
})

export const chatsLoadSuccessAction = (data) => ({
  type: CHATS_LOAD_SUCCESS,
  payload: data,
})

export const chatsLoadFailureAction = (error) => ({
  type: CHATS_LOAD_FAILURE,
  payload: error,
})

export const  chatsLoadAction = () => {
  return async (dispatch) => {
    try {
      dispatch(chatsLoadRequestAction());
      const result = await fetch('http://localhost:3000/chats?_embed=messages');
      dispatch(chatsLoadSuccessAction(await result.json()))
    } catch(error){
      dispatch(chatsLoadFailureAction(error));
    }
  }
}
