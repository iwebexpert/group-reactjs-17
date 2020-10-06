import {CHATS_MESSAGE_SEND, CHATS_LOAD} from '../actions/chats'
import {chats} from '../helpers/chatsData'
import update from 'react-addons-update'

const initialState = {
  loading: false,
  entries: chats
}

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_LOAD:
      return {
        ...state,
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
    default:
      return { ...state }
  }
}
