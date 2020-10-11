import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "reducers";
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from "redux-persist";
import ReduxThunk from 'redux-thunk'

//import {loggerMiddleware} from 'middlewares/loggerMiddleware';
import {botMiddleware} from 'middlewares/botMiddleware';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['chats'],
    // whitelist: ['chats'],
};

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, rootReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(
                logger,
                // loggerMiddleware,
                botMiddleware,
                routerMiddleware(history),
                //apiMiddleware,
                ReduxThunk
            )
        )
    );
    const persister = persistStore(store);
    return {store, persister};
}

//
// export const store = createStore(
//     rootReducer(history),
//     composeWithDevTools(
//         applyMiddleware(
//             logger,
//             // loggerMiddleware,
//             botMiddleware,
//             routerMiddleware(history),
//         )
//     )
// );