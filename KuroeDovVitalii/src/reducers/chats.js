import update from 'react-addons-update'
import { nanoid } from 'nanoid'
import { CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_MESSAGE_DELETE, 
        CHATS_ADD, CHAT_DELETE, CHAT_SELECT, CHAT_MESSAGES_DELETE  } from 'actions/chats'

import { citates } from '../helpers/citates'
import { chats } from '../helpers/chatsData'

const initialState = {
    loading: false,
    entries: [],
}

export const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case CHATS_LOAD: 
            return {
                ...state,
                entries: chats,
                selected: null,
                currentChatName: null,
            }

        case CHATS_MESSAGE_SEND:
            return update(state, {
                entries: {
                    [action.payload.numSelectedChat]: {
                        $merge: { fire: action.payload.fire ? action.payload.fire : false },
                        messages: { $push: [
                            { name: action.payload.name, text: action.payload.text, id: action.payload.id }
                        ]},
                        
                    }
                },
            })

        case CHATS_MESSAGE_DELETE:
            const { id, messageId } = action.payload
            const messages = state.entries[id].messages
            const filterMessage = messages.filter(item => item.id !== messageId)

            return update(state, {
                entries: { [id] : { $merge: { messages: filterMessage } } }
            })
          
        
        case CHATS_ADD: 
            return update(state, {
                entries: { $merge: {
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        fire : true,
                        avatar: action.payload.avatar,
                        messages: [{
                            name: action.payload.name, 
                            text: citates[Math.floor(Math.random() * 10) + 1].text, 
                            id: nanoid(4) 
                        }]
                    }
                }},
                $merge: { selected: action.payload.id, currentChatName: action.payload.name, chatId: action.payload.id },
            })
       
        case CHAT_DELETE: 
            const { entries } = state;
            const { [action.payload]: _, ...newEntries } = entries;
            
            return update(state, {$set: { entries: newEntries } })
        
        case CHAT_MESSAGES_DELETE: 
            return update(state, {
                entries: { [action.payload]: { $merge : { messages: [] } } }
            })

        case CHAT_SELECT: 
            return update(state, { 
                entries: { [action.payload.chatId] : { $merge: { fire: false } } },
                $merge: { selected: action.payload.chatId, currentChatName: action.payload.chatName }
            })
        
        default: 
            return state
    } 
}  