import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {routes} from '@/routes'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
      </BrowserRouter>
    )
  }
}

export {App}
