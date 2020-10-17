import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {apiMiddleware} from "redux-api-middleware";
import reduxThunk from 'redux-thunk';

import {createRootReducer} from 'reducers';
import {loggerMiddleware} from './middlewares/loggerMiddleware';
import {botMiddleware} from './middlewares/botMiddleware'
import {addMessageMiddleware} from './middlewares/addMessageMiddleware'
import {composeWithDevTools} from "redux-devtools-extension";

export const history = createBrowserHistory();

const persistConfig = {
  key: 'app',
  storage,
  blacklist: ['chats', 'profile']
};

// export const store = createStore(createRootReducer(history), applyMiddleware( logger,  loggerMiddleware, botMiddleware, routerMiddleware(history),));

export const initStore = () =>  {
  const InitialStore = {};
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    InitialStore,
    composeWithDevTools(applyMiddleware(
      logger,
      loggerMiddleware,
      botMiddleware,
      addMessageMiddleware,
      routerMiddleware(history),
      apiMiddleware,
      reduxThunk
    ))
  );
  const persistor = persistStore(store);
  return {store, persistor};
};
