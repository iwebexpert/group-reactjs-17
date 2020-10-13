import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Burger } from './components/Burger';
import { Data, RootState } from '@types';
import { ModeButton } from '@app/components/ModeButton';
import { Box, Text } from '@app/components/basic';
import { useTheme } from '@theme';
import { Avatar } from '@app/components/Avatar';
import { useAction } from '@app/hooks';
import { toggleMode } from '@app/store/mode/actions';

export const Header: FC = () => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const { mode } = useSelector((store: RootState) => store.mode);
  const { colors, indents } = useTheme();
  const history = useHistory();
  const changeMode = useAction(toggleMode);

  const modeHandler = () => {
    changeMode();
  };

  const profileHandler = () => history.push('/profile');

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
        <Box width="auto" display="flex">
          <Box display="flex" width="auto" onClick={modeHandler}>
            <ModeButton />
          </Box>
          <Box
            cursor="pointer"
            ml={indents.i12}
            display="flex"
            width="auto"
            onClick={profileHandler}
          >
            <Avatar size={30} alt="D" />
          </Box>
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
