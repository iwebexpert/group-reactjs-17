import update from 'react-addons-update';

import {CHATS_MESSAGE_SEND, CHATS_LOAD} from '../actions/chats';

import {chats} from '../helpers/chatsData';

const initialState = {
  loading: false,
  entries: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHATS_LOAD:
      return {
        ...state,
        entries: chats,
      };

    case CHATS_MESSAGE_SEND:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author}]},
          },
        },
      });

    default:
      return state;

  }
}

