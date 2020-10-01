import React, { FC } from 'react';
import { Box } from '@components/basic';
import styled, { css } from 'styled-components';

export const Profile: FC = () => (
  <PageBox>
    <Box>Тут будет профиль</Box>
  </PageBox>
);

const PageBox = styled(Box).attrs(({ theme: { indents } }) => ({
  px: indents.i10,
  display: 'flex',
  flexDirection: 'column',
  bg: '#0d1722',
  pb: '60px',
  pt: '60px',
  minHeight: '100vh',
  position: 'relative',
}))`
  ${({ theme: { breakpoints, indents } }) => css`
    ${breakpoints.up('sm')} {
      padding-left: ${indents.i20};
      padding-right: ${indents.i20};
    }
  `}
`;
