import React, { useState } from 'react';
import styled from 'styled-components';

import { MessageList } from 'components/MessageList';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

const Box = styled.div`
  padding: ${({ theme }) => theme.indents.i8};
`;

const App = () => {
  const [messagesData, setMessagesData] = useState([
    'Hi',
    'Hello',
    'Test message',
  ]);
  const [text, setText] = useState('');

  const handleSendMessage = () => {
    if (!text) {
      return;
    }
    setMessagesData([...messagesData, text]);
    setText('');
  };

  return (
    <Box>
      <MessageList items={messagesData} />
      <Input
        name={'textField'}
        onChange={({ target: { value } }) => setText(value)}
        type={'text'}
        value={text}
      />
      <Button mt={'4px'} onClick={handleSendMessage}>Send message</Button>
    </Box>
  );
};
export default App;
