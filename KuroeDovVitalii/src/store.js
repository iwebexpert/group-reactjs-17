import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from 'reducers'
import logger from 'redux-logger'
import { loggerMiddleWare } from 'middlewares/loggerMiddleWare'
import { botMiddleWare } from 'middlewares/botMiddleWare'
import { deleteMessageMiddleWare } from 'middlewares/deleteMessageMiddleWare'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, botMiddleWare, deleteMessageMiddleWare)))
