import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { chatReducer } from './chats'
import { profileReducer } from './profile'
import { alertReducer } from './alerts'

export const createRootReducer = (history) => combineReducers({
    chats: chatReducer,
    profile: profileReducer,
    alert: alertReducer,
    router: connectRouter(history)
})

