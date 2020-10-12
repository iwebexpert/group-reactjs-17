import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createRootReducer } from 'reducers'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { loggerMiddleWare } from 'middlewares/loggerMiddleWare'
import { botMiddleWare } from 'middlewares/botMiddleWare'
import { deleteMessageMiddleWare } from 'middlewares/deleteMessageMiddleWare'
import { chatDeleteMiddleWare } from 'middlewares/chatDeleteMiddleWare'
import { chatAddMiddleWare } from 'middlewares/chatAddMiddleWare'
import { alertMiddleWare } from 'middlewares/alertMiddleWare'
export const history = createBrowserHistory()

const persistConfig = {
    key: 'app',
    storage,
}

export const initStore = () => {
    const initialStore = {}
    const store = createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(
                logger, 
                botMiddleWare, 
                deleteMessageMiddleWare, 
                routerMiddleware(history), 
                chatAddMiddleWare, 
                alertMiddleWare,
                chatDeleteMiddleWare
            )
        )
    )
    const persistor = persistStore(store)
    return { store, persistor }
}