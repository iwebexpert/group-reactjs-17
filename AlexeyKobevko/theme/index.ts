import * as styledComponents from 'styled-components';
import { useContext } from 'react';

import { ThemeInterface } from './theme';

export const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
  createGlobalStyle,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export * from './theme';

export const GlobalStyle = createGlobalStyle<styledComponents.ThemeProps<ThemeInterface>>`
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

export const useTheme = () => useContext<ThemeInterface>(ThemeContext);

export default styled;
