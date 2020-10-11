import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {
   CHATS_LOAD_REQUEST,
   CHATS_LOAD_SUCCESS,
   CHATS_LOAD_FAILURE,
   CHATS_ADD,
   CHATS_DEL,
   SET_CHAT_READED_STATE,
   CHATS_MESSAGE_SEND} from '../actions/chatsActions'
// import {defaultChatsData} from '../helpers/defaultChatsData'
import {APP_NAME} from '../config/config.js'

const initialState = {
   loading: false,
   error: false,
   chats: []
}

export const chatsReducer = (state = initialState, action) => {
   switch (action.type) {

      // получение списка чатов c json-сервера
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
            chats: action.payload
        }
        case CHATS_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }

      // добавление нового чата
      case CHATS_ADD:
         return update(state, {
            chats: {
               $push: [{
                  id: action.id,
                  title: action.title,
                  readed: true,
                  messages: []
               }]
            }
         })

      // удаление чата
      case CHATS_DEL:
         const {chats} = state

         chats.splice(action.id, 1)
         chats.filter((chat, index) => chat.id = index)

         return {chats}

      // переключение бейджика непрочитанности сообщений
      case SET_CHAT_READED_STATE:
         return update(state, {
            chats: {
               [action.chatId]: {
                  readed: {$set: action.readed}
               }
            }
         })

      // добавление нового сообщения в чат
      case CHATS_MESSAGE_SEND:
         return update(state, {
            chats: {
               [action.message.chatId]: {
                  messages: {
                     $push: [{
                        id: action.message.id,
                        text: action.message.text,
                        author: action.message.author
                     }]
                  }
               }
            }
         })

      default:
         return state
   }
}
