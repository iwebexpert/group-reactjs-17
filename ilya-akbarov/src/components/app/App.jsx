import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {routes} from '@/routes'
import {Provider} from 'react-redux'
import {store} from '@/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => <Route key={index} {...route} />)}
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export {App}
