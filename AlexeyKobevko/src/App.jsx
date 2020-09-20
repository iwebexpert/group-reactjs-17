import React from 'react';
import styled, { css } from 'styled-components';

const messagesData = ['Hi', 'Hello', 'Test message'];

const MessageBox = styled.div`
  padding: ${({ theme }) => `${theme.indents.i4} 0`};
`;

const Message = ({ text, author }) => (
  <MessageBox>
    <p>
      {text} <b>({author})</b>
    </p>
  </MessageBox>
);

const MessageList = ({ items }) =>
  items.map((item, i) => (
    <Message text={item} author="WebDev" key={String(i)} />
  ));

const $Button = styled.button`
  ${({ theme: { colors } }) => css`
    background: ${colors.blueMain};
    color: ${colors.otherWhite};
    width: auto;
    height: 40px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      background: ${colors.blueDark2};
    }
  `}
`;

const Button = ({ children }) => {
  const handleClick = (event) => {
    console.log(event);
    console.log('Тестовая кнопка');
  };

  return <$Button onClick={handleClick}>{children}</$Button>;
};

const Box = styled.div`
  padding: ${({ theme }) => theme.indents.i8};
`;

const App = () => {
  return (
    <Box>
      <MessageList items={messagesData} />
      <Button>Тестовая кнопка new</Button>
    </Box>
  );
};
export default App;
