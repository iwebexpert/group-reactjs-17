import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import { createRootReducer } from './rootReducer';
import { botMiddleware } from '../middlewares/bot';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'app',
  storage,
};

export const initStore = () => {
  const initialStore = {};
  const store = createStore(
    persistReducer(persistConfig, createRootReducer(history)),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initialStore,
    composeWithDevTools(applyMiddleware(logger, botMiddleware, routerMiddleware(history), thunk)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
