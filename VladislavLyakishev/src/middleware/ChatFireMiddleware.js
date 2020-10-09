import {chatsToggleUnFire} from '../actions/chats'

export const ChatFireMiddleware = store => next => action => {
  const CHANGE_LOCATION = '@@router/LOCATION_CHANGE'
  if (action.type === CHANGE_LOCATION) {
    const path = action.payload.location.pathname
    // Проверка что мы в чатах, но тут будет баг если число чатов перевалит за 10
    if (path.slice(0, -1) === '/chats/') {
      store.dispatch(chatsToggleUnFire(path.slice(-1)))
    }


    // if (currentLocation !== `/chats/${chatId}`) {
    //     store.dispatch(chatsToggleFire(chatId))
    //  }
  }
  return next(action)
}




