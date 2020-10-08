import { CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_MESSAGE_DELETE,  } from '../actions/chats'

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
            return {
                ...state,
                entries: {
                    ...state.entries,
                    [action.payload.numSelectedChat] : {
                        ...state.entries[action.payload.numSelectedChat],
                        messages: [
                            ...state.entries[action.payload.numSelectedChat].messages,
                            { 
                                name: action.payload.name, 
                                text: action.payload.text, 
                                id: action.payload.id 
                            }
                        ]
                    }
                }
            }
        case CHATS_MESSAGE_DELETE:
            const { numSelectedChat, id } = action.payload
            const messages = state.entries[numSelectedChat].messages
            const filterMessage = messages.filter(item => item.id !== id)

            return {
                ...state,
                entries: {
                    ...state.entries,
                    [numSelectedChat] : {
                        ...state.entries[numSelectedChat],
                        messages: filterMessage
                    }
                }
            }

        default: 
            return state
    } 
}  