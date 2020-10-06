import { CHATS_LOAD, CHATS_MESSAGE_SEND } from '../actions/chats'

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
        default: 
            return state
    } 
}  