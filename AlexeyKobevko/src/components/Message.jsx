import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Message = ({ text, author }) => (
  <MessageBox>
    <Text>
      {text} <Author>({author})</Author>
    </Text>
  </MessageBox>
);

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

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};
