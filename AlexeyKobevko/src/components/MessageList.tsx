import React, { PureComponent, ReactNode } from 'react';
import { Data } from '@types';
import { Message } from '@components';

interface MessageListProps {
  items: Data.Message[];
}

export class MessageList extends PureComponent<MessageListProps, unknown> {
  public render(): ReactNode {
    const { items } = this.props;
    return (
      <>
        {items.map((message, idx) => (
          <Message key={`message-${idx}` as string} text={message.text} author={message.author} />
        ))}
      </>
    );
  }
}

// export const MessageList: FC<MessageListProps> = ({ items }) => {
//   return (
//     <>
//       {items.map((message, idx) => (
//         <Message key={`message-${idx}` as string} text={message.text} author={message.author} />
//       ))}
//     </>
//   );
// };
