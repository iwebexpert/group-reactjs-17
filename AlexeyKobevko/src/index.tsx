import React from 'react';
import ReactDom from 'react-dom';

import Messenger from './Messenger';
import { GlobalStyle, theme, ThemeProvider } from '@theme';
import Layout from './containers/Layout';

ReactDom.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Messenger />
      </Layout>
    </ThemeProvider>
  </>,
  document.getElementById('app-root'),
);
