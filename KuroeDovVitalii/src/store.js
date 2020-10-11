import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createRootReducer } from 'reducers'
import logger from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { loggerMiddleWare } from 'middlewares/loggerMiddleWare'
import { botMiddleWare } from 'middlewares/botMiddleWare'
import { deleteMessageMiddleWare } from 'middlewares/deleteMessageMiddleWare'
import { chatDeleteMiddleWare } from 'middlewares/chatDeleteMiddleWare'
import { chatAddMiddleWare } from 'middlewares/chatAddMiddleWare'
import { alertMiddleWare } from 'middlewares/alertMiddleWare'

export const history = createBrowserHistory()

export const store = createStore(createRootReducer(history), composeWithDevTools(
    applyMiddleware(
        logger, 
        botMiddleWare, 
        deleteMessageMiddleWare, 
        routerMiddleware(history), 
        chatAddMiddleWare, 
        alertMiddleWare,
        chatDeleteMiddleWare
    )
    ))
