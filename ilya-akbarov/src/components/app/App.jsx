import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { routes } from '@/routes'
import { initStore, history } from '@/store'

const { store, persistor } = initStore();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <PersistGate persistor={persistor}>
          <ConnectedRouter history={ history }>
            <Switch>
              { routes.map(
                (route, index) => <Route key={ index } { ...route } />) }
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export { App }
