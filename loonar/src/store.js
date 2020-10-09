import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';

import {createRootReducer} from 'reducers';
import {loggerMiddleware} from './middlewares/loggerMiddleware';
import {botMiddleware} from './middlewares/botMiddleware';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
    // blacklist: ['chats'],
};

// export const store = createStore(createRootReducer(history), composeWithDevTools(
//     applyMiddleware(logger, botMiddleware, routerMiddleware(history)),
//     ));

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        initialStore, 
        composeWithDevTools(
            applyMiddleware(logger, botMiddleware, routerMiddleware(history)),
        ));
    const persistor = persistStore(store);
    return {store, persistor};
};