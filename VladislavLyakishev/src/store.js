import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createRootReducer} from 'reducers';
import {botMiddleware} from './middleware/BotMiddleware';
import {ChatFireMiddleware} from './middleware/ChatFireMiddleware'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import { apiMiddleware } from 'redux-api-middleware';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'app',
  storage,
  blacklist: ['chats', 'profile']
};

export const initStore = () => {
  const initialStore = {}
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    initialStore,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        botMiddleware,
        ChatFireMiddleware,
        apiMiddleware
      )
    ));
  const persisStore = persistStore(store)
  return {store, persisStore}
}