import React, { ChangeEvent, Component, ReactNode, KeyboardEvent, createRef } from 'react';
import styled, { css } from 'styled-components';

import { Data } from '@types';
import { MessageList } from '@components/MessageList';
import { MessageField } from '@components/MessageField';
import { Box } from '@components/basic';

interface AppState extends Data.Message {
  messagesData: Data.Message[];
}

export default class Messenger extends Component<unknown, AppState> {
  private bot = 'Bot';
  private me = '@Djedaj';
  private timeout: number | null = null;
  private ref = createRef<HTMLTextAreaElement>();

  public state = {
    messagesData: [
      { text: 'Hi', author: 'WebDev' },
      { text: 'Hello', author: 'WebDev' },
      { text: 'Test message', author: 'WebDev' },
    ],
    text: '',
    author: '',
  };

  private handleMessageSend = (): void => {
    const { text } = this.state;

    if (!text) return;

    this.setState(prevState => ({
      ...prevState,
      messagesData: [...prevState.messagesData, { text, author: this.me }],
      text: '',
      author: '',
    }));
  };

  private keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    const { keyCode, ctrlKey } = e;
    if (keyCode === 13 && ctrlKey) {
      this.handleMessageSend();
    }
  };

  private handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.setState({ [name]: value });
  };

  public componentDidMount(): void {
    const input = this.ref.current;
    if (input) {
      input.focus();
    }
  }

  public componentDidUpdate(prevProps: Readonly<unknown>, prevState: Readonly<AppState>): void {
    const { messagesData } = this.state;
    const currentAuthor: string = messagesData[messagesData.length - 1].author;
    if (messagesData.length !== prevState.messagesData.length && currentAuthor !== this.bot) {
      const message: Data.Message = { text: `Hi, ${currentAuthor}`, author: this.bot };
      this.timeout = setTimeout(
        () =>
          this.setState({
            messagesData: [...messagesData, message],
          }),
        1000,
      );
    }
  }

  public componentWillUnmount(): void {
    if (typeof this.timeout === 'number') {
      clearTimeout(this.timeout);
    }
  }

  public render(): ReactNode {
    const { messagesData, text } = this.state;
    return (
      <PageBox>
        <MessageList items={messagesData} />
        <MessageField
          value={text}
          name="text"
          placeholder="Сообщение"
          onChange={this.handleChange}
          onClick={this.handleMessageSend}
          onKeyDown={this.keyDownHandler}
          forwardRef={this.ref}
        />
      </PageBox>
    );
  }
}

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
