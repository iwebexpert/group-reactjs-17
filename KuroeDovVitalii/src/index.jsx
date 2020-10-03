import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {AppContainer} from './containers/AppContainer'
import {Provider} from 'react-redux'

import {store} from './store'

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)