import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';


import {createRootReducer} from 'reducers';
import {loggerMiddleware} from './middlewares/loggerMiddleware';
import {botMiddleware} from './middlewares/botMiddleware'
import {addMessageMiddleware} from './middlewares/addMessageMiddleware'

export const history = createBrowserHistory();

const persistConfig = {
  key: 'app',
  storage,
  // blacklist: ['chats']
};

// export const store = createStore(createRootReducer(history), applyMiddleware( logger,  loggerMiddleware, botMiddleware, routerMiddleware(history),));

export const initStore = () =>  {
  const InitialStore = {};
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    InitialStore,
    applyMiddleware(
      logger,
      loggerMiddleware,
      botMiddleware,
      addMessageMiddleware,
      routerMiddleware(history),
    ));
  const persistor = persistStore(store);
  return {store, persistor};
};
