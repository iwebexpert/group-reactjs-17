import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Burger } from './components/Burger';
import { Data } from '@types';
import { ModeButton } from '@components/ModeButton';
import { Box, Text } from '@components/basic';
import { useTheme } from '@theme';

export const Header: FC = () => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('night');
  const { colors } = useTheme();

  const modeHandler = () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'night') {
      localStorage.setItem('mode', 'day');
      setMode('day');
    } else {
      localStorage.setItem('mode', 'night');
      setMode('night');
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
      setMode(currentMode);
    }
  }, []);

  return (
    <HeaderBox mode={mode}>
      <Content>
        <BurgerBox>
          <Burger onClick={() => setChecked(!isChecked)} checked={isChecked} />
        </BurgerBox>
        <Box width="auto">
          <Text fontSize="20px" fontWeight="bold" color={colors.mainWhite}>
            My Awesome Chat
          </Text>
        </Box>
        <Box width="auto" onClick={modeHandler}>
          <ModeButton />
        </Box>
      </Content>
    </HeaderBox>
  );
};

const Content = styled(Box).attrs(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1280px',
  px: theme.indents.i10,
}))`
  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      padding-left: ${theme.indents.i20};
      padding-right: ${theme.indents.i20};
    }
  `}
`;

const BurgerBox = styled(Box).attrs({
  width: 'auto',
})`
  ${({ theme }) => theme.breakpoints.up('md')} {
    visibility: hidden;
  }
`;

const HeaderBox = styled.header<Data.ColorMode>`
  ${({ theme, mode }) => css`
    background: ${mode === 'night' ? theme.colors.darkHeader : theme.colors.lightHeader};
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
  `}
`;
