import update from 'react-addons-update';

import {
  CHATS_MESSAGE_SEND,
  CHATS_ADD,
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_FAILURE,
} from './actions';
import { ChatProps } from './types';

const initialState: ChatProps = {
  loading: false,
  entries: [],
  error: false,
};

export const chatsReducer = (
  state = initialState,
  action: { type: string; payload: any },
): ChatProps => {
  switch (action.type) {
    case CHATS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case CHATS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
      };
    case CHATS_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case CHATS_MESSAGE_SEND:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {
              $push: [
                { id: action.payload.id, text: action.payload.text, author: action.payload.author },
              ],
            },
          },
        },
      });

    case CHATS_ADD:
      // eslint-disable-next-line no-case-declarations
      const { title, chatId } = action.payload;
      return update(state, {
        entries: {
          $merge: {
            [chatId]: {
              id: chatId,
              title,
              messages: [],
            },
          },
        },
      });

    default:
      return state;
  }
};
