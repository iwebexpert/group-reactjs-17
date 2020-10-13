import React, { ChangeEvent, Component, ReactNode, createRef } from 'react';
import styled, { css } from 'styled-components';

import { Data } from '@types';
import { MessageList } from '@app/components/MessageList';
import { MessageField } from '@app/components/MessageField';
import { Box, Text } from '@app/components/basic';

interface MessengerProps {
  chats: Data.Chat[];
  messages: any;
  handleMessageSend: any;
}

export class Messenger extends Component<MessengerProps, unknown> {
  // private bot = 'Bot';
  // private me = '@Djedaj';
  // private timeout: number | null = null;
  private ref = createRef<HTMLTextAreaElement>();

  // private handleMessageSend = (): void => {
  //   const { text, chats } = this.state;
  //   const { match } = this.props;
  //
  //   if (!text) return;
  //   const chat: Data.Chat = chats[match.params.id];
  //   const id = chat.messages[chat.messages.length - 1].id! + 1;
  //   const message: Data.Message = { text, author: this.me, id };
  //   chat.messages = [...this.messages, message];
  //
  //   this.setState(prevState => ({
  //     ...prevState,
  //     chats: {
  //       ...chats,
  //       [match.params.id]: chat,
  //     },
  //     text: '',
  //   }));
  // };

  // private keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
  //   const { keyCode, ctrlKey } = e;
  //   if (keyCode === 13 && ctrlKey) {
  //     this.handleMessageSend();
  //   }
  // };

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

  // public componentDidUpdate(
  //   prevProps: Readonly<RouteComponentProps<any>>,
  //   prevState: Readonly<AppState>,
  // ): void {
  //   const { chats } = this.state;
  //   const { match } = this.props;
  //   const chat = chats[match.params.id];
  //   const currentAuthor: string = chat.messages[chat.messages.length - 1].author;
  //   const prevMessages = prevState.chats[match.params.id].messages;
  //   if (chat.messages.length === prevMessages.length && currentAuthor !== this.bot) {
  //     const id = prevMessages[prevMessages.length - 1].id! + 1;
  //     const message: Data.Message = { text: `Hi, ${currentAuthor}`, author: this.bot, id };
  //     chat.messages = [...this.messages, message];
  //     this.timeout = setTimeout(
  //       () =>
  //         this.setState(prevState => ({
  //           ...prevState,
  //           chats: {
  //             ...chats,
  //             [match.params.id]: chat,
  //           },
  //         })),
  //       1000,
  //     );
  //   }
  // }

  // get messages(): Data.Message[] {
  //   const { chats } = this.state;
  //   const { match } = this.props;
  //
  //   let messages = null;
  //   if (match && chats[match.params.id]) {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     messages = chats[match.params.id]?.messages;
  //   }
  //   return messages as Data.Message[];
  // }

  // public componentWillUnmount(): void {
  //   if (typeof this.timeout === 'number') {
  //     clearTimeout(this.timeout);
  //   }
  //   localStorage.setItem('chats', JSON.stringify(this.state.chats));
  // }

  public render(): ReactNode {
    const { messages, handleMessageSend } = this.props;
    const messagesData = messages;
    return (
      <PageBox>
        {messages ? (
          <MessageList items={messages} />
        ) : (
          <Box>
            <Text color="white">Выберите чат слева</Text>
          </Box>
        )}
        {messagesData && (
          <MessageField placeholder="Сообщение" forwardRef={this.ref} onSend={handleMessageSend} />
        )}
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
