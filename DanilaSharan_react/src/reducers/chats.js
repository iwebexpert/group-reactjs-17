import update from 'react-addons-update';

import {
  CHATS_MESSAGE_SEND,
  CHATS_LOAD_FAILURE,
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_ADD,
  CHAT_FIRE,
  CHAT_UNFIRE,
  // CHAT_DELETE,
  // MESSAGE_DELETE,
} from '../actions/chats';

const initialState = {
  loading: false,
  error: false,
  entries: [],
};

export const chatsReducer = (state = initialState, action) => {
  console.log('АКТИОН!!!!!!!!!!!!!!!!!!!!!!!!!!!', action)
  switch(action.type) {
    case CHATS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
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

    // case CHAT_DELETE:
    //   return update(state, {
    //     entries: {$splice: null}
    //   });
    //
    // case MESSAGE_DELETE:
    //   return {
    //     ...state,
    //     entries: chats,
    //   };

    case CHATS_MESSAGE_SEND:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author}]},
          },
        },
      });

    case CHATS_ADD:
      const {title, chatId} = action.payload;
      return update(state, {
        entries: {$merge: {
          [chatId]: {
            id: chatId,
            title,
            messages: [],
            unread: false,
          }
        }},
      });

    case CHAT_FIRE:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            $merge: { unread: true }
          }
        }
      });

    case CHAT_UNFIRE:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            $merge: { unread: false }
          }
        }
      });

    default:
      return state;

  }
}

