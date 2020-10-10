import update from 'react-addons-update'
import { nanoid } from 'nanoid'
import { CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_MESSAGE_DELETE, CHATS_ADD, CHAT_DELETE, CHAT_SELECT } from '../actions/chats'

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
                currentChatName: null
            }

        case CHATS_MESSAGE_SEND:

            return update(state, {
                entries: {
                    [action.payload.numSelectedChat]: {
                        messages: {$push: [
                            { name: action.payload.name, text: action.payload.text, id: action.payload.id }
                        ]},
                        
                    }
                },
            })

        case CHATS_MESSAGE_DELETE:
            console.log(action.payload)
            const { id, messageId } = action.payload
            const messages = state.entries[id].messages
            const message = messages.filter(item => item.id === messageId)
            const filterMessage = messages.filter(item => item.id !== messageId)
            return {
                ...state,
                entries: {
                    ...state.entries,
                    [id] : {
                        ...state.entries[id],
                        messages: filterMessage
                    }
                },
            }
        
        case CHATS_ADD: 
            let newChatId = nanoid(4)
            return update(state, {
                entries: { $merge: {
                    [newChatId]: {
                        id: newChatId,
                        name: action.payload.data.name,
                        avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`,
                        messages: []
                    }
                }}
            })
       
        case CHAT_DELETE: 

            return update(state, {
                entries: {$splice: null}
            })
        
        case CHAT_SELECT: 
            console.log(action.payload)
            return update(state, { $merge: 
                { selected: action.payload.chatId, currentChatName: action.payload.chatName }
            })

        default: 
            return state
    } 
}  