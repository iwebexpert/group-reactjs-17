import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';



import {initStore, history} from './store';
import {Layout} from "components/Layout";

const {store, persistor} = initStore();

ReactDom.render(
    <Provider store={store}>
        <Layout history={history} persistor={persistor}/>
    </Provider>,
    document.getElementById('root')
);