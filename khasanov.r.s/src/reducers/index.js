import {combineReducers} from 'redux';
import {chatsReducer} from './chatReducer';
import {profileReducer} from './profileReducer';
import {connectRouter} from "connected-react-router";

export const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    profile: profileReducer,
})