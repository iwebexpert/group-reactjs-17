import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {routes} from './routes';
import {initStore, history} from './store';
import {Header} from 'components/Header';

const {store, persistor} = initStore();
ReactDom.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <Header/>
                <Switch>
                    {routes.map((route, index) => (<Route key={index} {...route} />))}
                </Switch>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);