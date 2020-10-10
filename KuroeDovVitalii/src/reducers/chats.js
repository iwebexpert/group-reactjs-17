import update from 'react-addons-update'
import { nanoid } from 'nanoid'
import { CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_MESSAGE_DELETE, CHATS_ADD, CHAT_DELETE } from '../actions/chats'

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
            const { numSelectedChat, messageId } = action.payload
            const messages = state.entries[numSelectedChat].messages
            const message = messages.filter(item => item.id === messageId)
            const filterMessage = messages.filter(item => item.id !== messageId)
            return {
                ...state,
                entries: {
                    ...state.entries,
                    [numSelectedChat] : {
                        ...state.entries[numSelectedChat],
                        messages: filterMessage
                    }
                },
            }
        
        case CHATS_ADD: 
            return update(state, {
                entries: {$merge: {
                    [action.payload.chatId]: {
                        id: nanoid(4),
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

        default: 
            return state
    } 
}  