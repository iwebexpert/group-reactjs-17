import { CHATS_MESSAGE_SEND } from '../actions/chats'
import { chatFireAction } from '../actions/chats'

export const addMessageMiddleware = store => next => action => {
  if (action.type === CHATS_MESSAGE_SEND) {
    const { router } = store.getState()

    const chatId = router.location.pathname.split('/').pop()

    if (action.payload.chatId !== chatId) {
      store.dispatch(chatFireAction(action.payload.chatId))
    }
  }

  return next(action)
}
