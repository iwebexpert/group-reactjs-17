import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';

import {Layout} from './components/Layout';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ConnectedRouter} from 'connected-react-router';

import {initStore, history} from './store';

const {store, persistor} = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <Layout/>
            </ConnectedRouter>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);