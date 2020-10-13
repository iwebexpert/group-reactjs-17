import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from '@app/components/basic';
import { useTheme } from '@theme';
import { RootState } from '@types';
import { Button } from '@app/components/Button';
import { useSelector } from 'react-redux';
import { chatsAddAction } from '@app/store/chats/actions';
import { useAction } from '@app/hooks';

export const Sidebar: FC = () => {
  const [chatName, setChatName] = useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false);
  const { entries } = useSelector((store: RootState) => store.chats);
  const addChat = useAction(chatsAddAction);
  const { header, colors, indents } = useTheme();

  const addChatHandler = () => {
    setShowInput(!showInput);
    setChatName('');
    const nextId = entries[entries.length - 1].id + 1;
    addChat(nextId, chatName);
  };

  return (
    <Box py={header.height}>
      <ul style={{ listStyle: 'none' }}>
        {entries.map(chat => (
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
