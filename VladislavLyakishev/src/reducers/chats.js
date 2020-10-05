import {CHATS_LOAD, CHATS_MESSAGE_SEND} from '../actions/chats'
import {chats} from '../helpers/chatsData'

const initialState = {
    loading: false,
    entries: [],

}

export const chatsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: chats
            }
        default:
            return state
    }
}