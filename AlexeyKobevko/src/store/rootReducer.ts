import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { chatsReducer } from '@app/store/chats/reducer';
import { modeReducer } from '@app/store/mode/reducers';
import { profileReducer } from '@app/store/profile/reducers';

export const createRootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    mode: modeReducer,
    profile: profileReducer,
  });
