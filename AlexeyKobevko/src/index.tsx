import React from 'react';
import ReactDom from 'react-dom';

import { GlobalStyle, theme, ThemeProvider } from '@theme';
import Layout from './containers/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Messenger from './Messenger';
import { Profile } from './containers/Profile';

ReactDom.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Messenger} />
          <Route path="/chat/:id" exact component={Messenger} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>,

  document.getElementById('app-root'),
);
