// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDom from 'react-dom';

import Messenger from './Messenger';
import { GlobalStyle, theme, ThemeProvider } from '../theme';

ReactDom.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Messenger />
    </ThemeProvider>
  </>,
  document.getElementById('app-root'),
);
