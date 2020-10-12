import {
    CHATS_LOAD, //Local
    CHATS_MESSAGE_SEND,
    CHATS_ADD,
    CHATS_STATUS_FIRE,
    CHATS_STATUS_UNFIRE,
     CHATS_LOAD_REQUEST,
     CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE
} from '../actions/chats'

import update from 'react-addons-update'

const initialState = {
    loading: false,
    error: false,
    entries: [],
}

export const chatsReducer = (state = initialState, actions) => {
    switch (actions.type) {
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
                entries: actions.payload
            }
        case CHATS_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                entries: actions.payload
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
        case CHATS_STATUS_UNFIRE:
            const chatIdUnFire = actions.payload
            return update(state, {
                entries: {
                    [chatIdUnFire]: {
                        fire: {$set: false}
                    }
                }
            })
        default:
            return state
    }
}