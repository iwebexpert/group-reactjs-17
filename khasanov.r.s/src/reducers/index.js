import {combineReducers} from 'redux';
import {chatsReducer} from './chatReducer';
import {profileReducer} from './profileReducer';

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
})