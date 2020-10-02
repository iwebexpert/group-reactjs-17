import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, MemoryRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';
import {Header} from './components/Header';
import {Layout} from './components/Layout';

ReactDom.render(
    //<>
    //    <Layout />
    //</>, 
    <Layout/>, 
    document.getElementById('root')
);