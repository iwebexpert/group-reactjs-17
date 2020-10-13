import { nanoid } from 'nanoid';
import { Action } from 'redux';
import { CHATS_MESSAGE_SEND, chatsMessageSendAction } from '@app/store/chats/actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const botMiddleware = (store: {
  dispatch: (arg0: Action) => void;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
}) => (next: (arg0: any) => any) => (action: {
  type: string;
  payload: { chatId: number | string; author: string };
}) => {
  if (action.type === CHATS_MESSAGE_SEND) {
    const { chatId, author } = action.payload;
    // console.log('botMiddleware', chatId, author);
    if (author !== 'Bot') {
      setTimeout(() => {
        if (author !== 'Bot') {
          store.dispatch(
            chatsMessageSendAction({
              id: nanoid(),
              chatId,
              text: `Hi, ${author}! Это бот...`,
              author: 'Bot',
            }),
          );
        }
      }, 1000);
    }
  }
  return next(action);
};
