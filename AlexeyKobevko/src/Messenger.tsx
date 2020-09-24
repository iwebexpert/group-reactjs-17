import React, { ChangeEvent, Component, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Data } from '../types';
import { MessageList } from './components/MessageList';
import { Button } from './components/Button';
import { FormField } from './components/FormField';
import { Box } from './components/Box';
import { theme } from '../theme';

interface AppState {
  text: string;
  author: string;
  messagesData: Data.Message[];
}

export default class Messenger extends Component<Record<string, unknown>, AppState> {
  private bot = 'Bot';
  private timeout: number | null = null;

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
    const { text, author } = this.state;

    if (!text && !author) return;

    this.setState(prevState => ({
      ...prevState,
      messagesData: [...prevState.messagesData, { text, author }],
      text: '',
      author: '',
    }));
  };

  private handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.setState({ [name]: value });
  };

  public componentDidUpdate(
    prevProps: Readonly<Record<string, unknown>>,
    prevState: Readonly<AppState>,
  ): void {
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
    const { messagesData, text, author } = this.state;
    return (
      <PageBox>
        <MessageList items={messagesData} />
        <FieldBox my={theme.indents.i10}>
          <FormField
            placeholder="Автор"
            value={author}
            name="author"
            onChange={this.handleChange}
          />
        </FieldBox>
        <FieldBox>
          <FormField
            placeholder="Сообщение"
            field="textArea"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
        </FieldBox>
        <Button width="150px" mt={theme.indents.i4} onClick={this.handleMessageSend}>
          Send
        </Button>
      </PageBox>
    );
  }
}

const PageBox = styled(Box).attrs(({ theme: { indents } }) => ({
  p: indents.i10,
}))`
  ${({ theme: { breakpoints, indents } }) => css`
    ${breakpoints.up('sm')} {
      padding: ${indents.i20};
    }
  `}
`;

const FieldBox = styled(Box)`
  ${({ theme }) => css`
    width: 100%;
    ${theme.breakpoints.up('sm')} {
      width: 560px;
    }
  `}
`;
