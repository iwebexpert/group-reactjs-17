import React from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
      font-style: normal;
      font-size: 16px;
      font-variant: tabular-nums;
      line-height: 1.5715;
      color: ${theme.colors.greyDark2};
      margin: 0;
      padding: 0;
    }

    textarea,
    input {
      font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 1.5715;
    }

    a {
      text-decoration: none;
    }
    p {
      margin: 0;
      word-wrap: break-word;
    }
  `}
`;

import { theme } from './theme';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
