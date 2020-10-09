import {chatsToggleUnFire} from '../actions/chats'

export const ChatFireMiddleware = store => next => action => {
  const CHANGE_LOCATION = '@@router/LOCATION_CHANGE'
  if (action.type === CHANGE_LOCATION) {
    const path = action.payload.location.pathname
    // Проверка что мы в чатах
    if (path.split('/')[1] === 'chats') {
      store.dispatch(chatsToggleUnFire(path.split('/')[2]))
    }
  }
  return next(action)
}




