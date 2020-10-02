import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';

import {Messenger} from 'components/Messenger';
import {Header} from 'components/Header';

ReactDom.render(
    <BrowserRouter>
        <Header/>
        <Switch>
            {routes.map((route, index) => (<Route key={index} {...route} />))}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);