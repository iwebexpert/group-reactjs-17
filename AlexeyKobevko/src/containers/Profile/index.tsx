import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { Box, Text } from '@app/components/basic';
import { RootState } from '@types';
import { useTheme } from '@theme';

export const Profile: FC = () => {
  const { profile } = useSelector((store: RootState) => store.profile);
  const { colors } = useTheme();
  return (
    <PageBox>
      <Box>
        <Text color={colors.mainWhite}>{profile.name}</Text>
        <Text color={colors.mainWhite}>{profile.age}</Text>
      </Box>
    </PageBox>
  );
};

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
