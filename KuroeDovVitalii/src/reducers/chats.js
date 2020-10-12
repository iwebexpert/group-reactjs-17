import update from 'react-addons-update'
import { nanoid } from 'nanoid'
import { CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_MESSAGE_DELETE, CHATS_ADD, CHAT_DELETE, CHAT_SELECT, CHAT_MESSAGE_ALERT } from '../actions/chats'
import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()
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
                            id: nanoid(4) }
                        ]
                    }
                }},
            })
       
        case CHAT_DELETE: 
            console.log(action.payload, 'CHAT_DELETE')
            const { entries } = state;
            const { [action.payload]: _, ...newEntries } = entries;
            
            return update(state, {$set:
                { entries: newEntries }
            })
        
        case CHAT_SELECT: 
        console.log(state)
            return update(state, { 
                entries: {
                    [action.payload.chatId] : { 
                        $merge: { fire: false }
                    }
                },
                $merge: { selected: action.payload.chatId, currentChatName: action.payload.chatName, }
            })
        
        default: 
            return state
    } 
}  