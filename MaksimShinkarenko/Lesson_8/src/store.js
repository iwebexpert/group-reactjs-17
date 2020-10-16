import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import reduxThunk from 'redux-thunk';

import {createRootReducer} from 'reducers';
import {loggerMiddleware} from 'middlewares/loggerMiddleware';
import {botMiddleware} from 'middlewares/botMiddleware';
import {chatFireMiddleware} from 'middlewares/chatFireMiddleware';

const composeWithDevToolsUser = composeWithDevTools({
    trace: true,
});

export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['chats', 'profile'],
}

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        initialStore,
        composeWithDevToolsUser(
            applyMiddleware(logger, botMiddleware, chatFireMiddleware, routerMiddleware(history), reduxThunk)
        ));
    const persistor = persistStore(store);
    return {store, persistor};
}