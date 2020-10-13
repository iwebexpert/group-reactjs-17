import React, { FC, useState, ChangeEvent } from 'react';
import Textarea from 'react-expanding-textarea';
import styled, { css } from 'styled-components';
import { Box } from '@app/components/basic';
import { SendIcon } from '@app/components/icons/SendIcon';
import { Data } from '@types';

type Message = {
  text: string;
  author: string;
};

interface MessageFieldProps {
  placeholder?: string;
  forwardRef?: any;
  onSend: (e: Message) => void;
}

export const MessageField: FC<MessageFieldProps> = ({ placeholder, forwardRef, onSend }) => {
  const [text, setText] = useState<string>('');
  const author = '@Djedaj';

  const handleMessageSend = (): void => {
    onSend({ text, author });
    setText('');
  };

  return (
    <>
      <Wrapper>
        <Box maxWidth="1280px" display="flex">
          <Helper />
          <Content mode="night">
            <Field
              value={text}
              name="text"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
              placeholder={placeholder}
              ref={forwardRef}
            />
            <Button onClick={handleMessageSend}>
              <SendIcon />
            </Button>
          </Content>
        </Box>
      </Wrapper>
    </>
  );
};

const Button = styled(Box).attrs({
  display: 'flex',
  width: 'auto',
})`
  cursor: pointer;
  user-select: none;
`;

const Helper = styled(Box).attrs({
  display: 'none',
})`
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    width: ${({ theme }) => theme.sidebar.width};
    max-width: ${({ theme }) => theme.sidebar.width};
  }
`;

const Content = styled(Box).attrs<Data.ColorMode>(({ theme, mode }) => ({
  bg: mode === 'night' ? theme.colors.darkHeader : theme.colors.lightHeader,
  py: theme.indents.i4,
  px: theme.indents.i10,
  display: 'flex',
  alignItems: 'center',
}))<Data.ColorMode>`
  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      padding-left: ${theme.indents.i20};
      padding-right: ${theme.indents.i20};
    }
    ${theme.breakpoints.up('md')} {
      width: calc(100% - ${theme.sidebar.width});
    }
  `}
`;

const Field = styled(Textarea)`
  width: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.mainWhite};
  padding-right: 10px;

  &:focus {
    border: none;
    outline: none;
  }
`;

const Wrapper = styled(Box).attrs(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  minHeight: theme.header.height,
  zIndex: 10,
}))``;
