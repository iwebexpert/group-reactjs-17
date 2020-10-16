import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { apiMiddleware } from 'redux-api-middleware'
import reduxThunk from 'redux-thunk'
import { createRootReducer } from './reducers'

import { botMiddleware } from './middlewares/botMiddleware'
import { addMessageMiddleware } from './middlewares/addMessageMiddleware'

export const history = createBrowserHistory()

const persistConfig = {
  key: 'app',
  storage,
  blacklist: ['chats']
}

export const initStore = () => {
  const initialStore = {}
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    initialStore,
    applyMiddleware(
      botMiddleware,
      addMessageMiddleware,
      routerMiddleware(history),
      apiMiddleware,
      reduxThunk
    ),
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
