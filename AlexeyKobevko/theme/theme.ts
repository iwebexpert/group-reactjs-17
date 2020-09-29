import indents from './indents';
import colors from './colors';
import breakpoints from './breakpoints';
import sidebar from './components/sidebar';
import header from './components/header';

export const theme = {
  indents,
  colors,
  breakpoints,
  sidebar,
  header,
};

export type ThemeInterface = typeof theme;
