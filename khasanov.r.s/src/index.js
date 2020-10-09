import React from 'react';
import ReactDom from 'react-dom';
import {Switch, Route} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";

import {routes} from './routes';
import {initStore, history} from "./store";

const {store, persister} = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate persistor={persister}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map((route, index) => (<Route key={index} {...route}/>))}
                </Switch>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);