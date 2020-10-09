import React from 'react';
import ReactDom from 'react-dom';

import {Layout} from 'components/Layout';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

import {store, history} from './store';
import {Provider} from 'react-redux';

import {ConnectedRouter} from 'connected-react-router';

ReactDom.render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
            <Layout />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

