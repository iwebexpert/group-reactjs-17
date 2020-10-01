import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from '@components/basic';
import { useTheme } from '@theme';
import { chats as chatsData } from '../../helpers/chatsData';
import { Data } from '@types';
import { Button } from '@components/Button';

export const Sidebar: FC = () => {
  const [chats, setChat] = useState<Array<Data.Chat>>([]);
  const [chatName, setChatName] = useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false);
  const { header, colors, indents } = useTheme();

  useEffect(() => {
    const storage = localStorage.getItem('chats');
    if (storage) {
      setChat(JSON.parse(storage));
    } else {
      setChat(chatsData);
      localStorage.setItem('chats', JSON.stringify(chatsData));
    }
  }, []);

  const addChatHandler = () => {
    const message = { id: 0, author: 'Bot', text: `Welcome to ${chatName}` };
    const newChat = { id: chats[chats.length - 1].id + 1, title: chatName, messages: [message] };
    setChat([...chats, newChat]);
    setShowInput(!showInput);
    setChatName('');
    const str = localStorage.getItem('chats');
    if (str) {
      const store = JSON.parse(str);
      store.push(newChat);
      localStorage.setItem('chats', JSON.stringify(store));
    }
  };

  return (
    <Box py={header.height}>
      <ul style={{ listStyle: 'none' }}>
        {chats.map(chat => (
          <li key={chat.id}>
            <Link to={`/chat/${chat.id}`}>
              <Text color={colors.mainWhite}>{chat.title}</Text>
            </Link>
          </li>
        ))}
        {showInput && (
          <input
            type="text"
            name="chatName"
            value={chatName}
            onChange={e => setChatName(e.target.value)}
          />
        )}
        <Box mt={indents.i12} width="auto" cursor="pointer">
          {!chatName ? (
            <Text onClick={() => setShowInput(!showInput)} color={colors.mainWhite}>
              &#43; новый чат
            </Text>
          ) : (
            <Button onClick={addChatHandler}>Добавить чат</Button>
          )}
        </Box>
      </ul>
    </Box>
  );
};
