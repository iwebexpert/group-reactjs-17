import {CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD} from '../actions/chats'
import {chats} from '../helpers/chatsData'
import update from 'react-addons-update'

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
        case CHATS_MESSAGE_SEND:
            return update(state, {
                entries: {
                    [actions.payload.chatId]: {
                        messages: {$push: [{
                            id: actions.payload.id,
                            text: actions.payload.message,
                            author: actions.payload.author,
                            }]},
                    },
                }
            });
        case CHATS_ADD:
            return update(state, {
                entries: {$push: [{
                    id: state.entries.length,
                    title: actions.payload,
                    messages: [
                        {
                            id: 0,
                            author: 'BOT',
                            text: 'Создан новый чат, добро пожаловать'
                        },
                    ]
                    }]
                }
            })
        default:
            return state
    }
}