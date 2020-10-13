import styled, { css } from 'styled-components';

import { Box } from '@app/components/basic';

export const LayoutBox = styled(Box)`
  min-height: 100%;
  padding: 0;
  margin: 0;
`;

export const PageLayoutBox = styled(Box)`
  display: flex;
  height: auto;
  min-height: 100%;
  max-width: 1280px;
`;

export const PageContent = styled.main`
  ${({ theme }) => css`
    min-height: 100%;
    height: 100%;
    width: calc(100% - ${theme.sidebar.width});
    box-sizing: border-box;
    ${theme.breakpoints.down('sm')} {
      width: 100%;
    }
  `}
`;

export const SectionBox = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.darkSidebar};
`;

export const SidebarBox = styled.aside`
  ${({ theme: { colors, breakpoints, sidebar } }) => css`
    max-width: ${sidebar.width};
    width: ${sidebar.width};
    box-shadow: ${sidebar.boxShadow};
    background-color: ${colors.darkSidebar};
    position: relative;
    z-index: 1;
    height: inherit;
    ${breakpoints.down('sm')} {
      display: none;
    }
  `}
`;
