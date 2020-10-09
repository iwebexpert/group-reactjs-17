import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { chatReducer } from './chats'
import { profileReducer } from './profile'

export const createRootReducer = (history) => combineReducers({
    chats: chatReducer,
    profile: profileReducer,
    router: connectRouter(history)
})

