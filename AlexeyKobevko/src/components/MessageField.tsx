import React, { FC, MouseEvent, KeyboardEvent } from 'react';
import Textarea from 'react-expanding-textarea';
import styled, { css } from 'styled-components';
import { Box } from '@components/basic';
import { SendIcon } from '@components/icons/SendIcon';
import { Data } from '@types';

interface MessageFieldProps {
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  forwardRef?: any;
}

export const MessageField: FC<MessageFieldProps> = ({
  value,
  name,
  placeholder,
  onChange,
  onClick,
  onKeyDown,
  forwardRef,
}) => {
  return (
    <>
      <Wrapper>
        <Box maxWidth="1280px" display="flex">
          <Helper />
          <Content mode="night">
            <Field
              onKeyDown={onKeyDown}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              ref={forwardRef}
            />
            <Button onClick={onClick}>
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
