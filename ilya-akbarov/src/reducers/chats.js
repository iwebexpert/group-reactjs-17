import {
  CHATS_MESSAGE_SEND,
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_FAILURE,
  CHAT_ADD,
  CHAT_FIRE,
  CHAT_UNFIRE,
} from '../actions/chats'
import update from 'react-addons-update'

const initialState = {
  loading: false,
  error: false,
  entries: [],
}

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case CHATS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload
      }
    case CHATS_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        entries: action.payload
      }
    case CHATS_MESSAGE_SEND:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {
              $push: [{text: action.payload.text, author: action.payload.author}]
            }
          }
        }
      })
    case CHAT_ADD:
      const { name, chatId } = action.payload
      return update(state, {
        entries: {$merge: {
            [chatId]: {
              id: chatId,
              name,
              messages: [],
              unread: false,
            }
          }}
      })
    case CHAT_FIRE:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            $merge: { unread: true }
          }
        }
      })
    case CHAT_UNFIRE:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            $merge: { unread: false }
          }
        }
      })
    default:
      return state
  }
}
