import React, { PureComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { Data } from '@types';

export class Message extends PureComponent<Data.Message, unknown> {
  public render(): ReactNode {
    const { text, author } = this.props;
    return (
      <MessageBox>
        <Text>
          {text} <Author>({author})</Author>
        </Text>
      </MessageBox>
    );
  }
}

// export const Message: FC<Data.Message> = ({ text, author }) => (
//   <MessageBox>
//     <Text>
//       {text} <Author>({author})</Author>
//     </Text>
//   </MessageBox>
// );

const MessageBox = styled.div`
  padding: ${({ theme }) => `${theme.indents.i4} 0`};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.greyDark2};
`;

const Author = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.greyDark};
  font-weight: bold;
`;
