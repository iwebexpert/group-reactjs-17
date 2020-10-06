import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store'
import {routes} from './routes';
import {Header} from './components/Header';
import {Layout} from './components/Layout';

ReactDom.render(
    <Provider store={store}>
        <Layout/>
    </Provider>, 
    document.getElementById('root')
);