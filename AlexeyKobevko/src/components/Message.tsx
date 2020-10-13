import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Data } from '@types';
import { Box, Text } from '@app/components/basic';
import { Avatar } from '@app/components/Avatar';
import { useTheme } from '@theme';

export const Message: FC<Data.Message> = ({ text, author }) => {
  const me = author === '@Djedaj';
  const { colors } = useTheme();
  return (
    <MessageBox author={author} justifyContent={me ? 'flex-end' : 'flex-start'}>
      {!me && <Avatar size={30} alt={author.charAt(0).toUpperCase()} />}
      <Paper bg={me ? colors.accentMain : colors.darkHeader}>
        <Text>
          {text} {!me && <Author>({author})</Author>}
        </Text>
      </Paper>
    </MessageBox>
  );
};

const Paper = styled(Box).attrs(({ theme }) => ({
  maxWidth: 'max-content',
  color: theme.colors.mainWhite,
  mb: theme.indents.i4,
  borderRadius: theme.indents.i12,
  p: `${theme.indents.i4} ${theme.indents.i12}`,
  ml: theme.indents.i12,
}))``;

const MessageBox = styled(Box).attrs({
  display: 'flex',
  maxWidth: '90%',
})<Pick<Data.Message, 'author'>>`
  ${({ author }) =>
    author === '@Djedaj' &&
    css`
      align-self: flex-end;
    `}
`;

const Author = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.greyDark};
  font-weight: bold;
`;
