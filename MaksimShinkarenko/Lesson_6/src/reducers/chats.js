import update from 'react-addons-update';

import {CHATS_MESSAGE_SEND, CHATS_LOAD, CHATS_ADD, CHATS_UNFIRE, CHATS_FIRE} from 'actions/chats';

import {chats} from '../helpers/chatsData';

const initialState = {
    loading: false,
    entries: [],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: chats,
            };

        case CHATS_MESSAGE_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {
                            $push: [{
                                id: action.payload.id,
                                text: action.payload.text,
                                author: action.payload.author
                            }],
                        },
                    },
                },
            });

        case CHATS_ADD:
            return update(state, {
                entries: {
                    $push: [{
                        id: action.payload.id,
                        title: action.payload.title,
                        messages: [
                            {
                                id: 0,
                                author: 'WebDev',
                                text: `Приветствуем в новом чате - ${action.payload.title}`
                            },
                        ],
                    }]
                }
            });

        case CHATS_FIRE:
            return update(state, {
                entries: {
                    [action.payload]: {
                        $merge: {fire: true}
                    }
                }
            });

        case CHATS_UNFIRE:
            return update(state, {
                entries: {
                    [action.payload]: {
                        $merge: {fire: false}
                    }
                }
            });

        default:
            return state;
    }
}