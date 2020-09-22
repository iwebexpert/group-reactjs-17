import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import Theme, { GlobalStyle } from '../theme';

ReactDom.render(
  <>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </>,
  document.getElementById('app-root'),
);
