import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import {routes} from './routes';

import {store} from './store';

import {Header} from './containers/Header';

ReactDom.render(
    <Provider store={store}>
        <Header/>
        <BrowserRouter>
        <Switch>
            {routes.map((route, index) => (<Route key={index} {...route} />))}
        </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);