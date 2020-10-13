import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle, theme, ThemeProvider } from '@theme';
import Layout from '@app/containers/Layout';
import { MessengerContainer } from '@app/containers/MessengerContainer';
import { Profile } from '@app/containers/Profile';
import { initStore, history } from '@app/store';

const { store, persistor } = initStore();

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Layout>
              <Switch>
                <Route path="/" exact component={MessengerContainer} />
                <Route path="/chat/:id" exact component={MessengerContainer} />
                <Route path="/profile" exact component={Profile} />
              </Switch>
            </Layout>
          </Router>
        </ThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,

  document.getElementById('app-root'),
);
