import {CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD, CHATS_STATUS_FIRE, CHATS_STATUS_UNFIRE} from '../actions/chats'
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
            const {name, chatId} = actions.payload
            return update(state, {
                entries: {$push: [{
                    id: chatId,
                    fire: false,
                    title: name,
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
        case CHATS_STATUS_FIRE:
            const chatIdFire = actions.payload
            return update(state, {
                entries: {
                    [chatIdFire]: {
                        fire: {$set: true}
                    }
                }
            })
        default:
            return state
    }
}