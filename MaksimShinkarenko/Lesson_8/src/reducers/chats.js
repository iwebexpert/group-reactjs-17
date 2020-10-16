import update from 'react-addons-update';

import {
    CHATS_MESSAGE_SEND,
    CHATS_LOAD_FAILURE,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_REQUEST,
    CHATS_ADD,
    CHATS_UNFIRE,
    CHATS_FIRE
} from 'actions/chats';

const initialState = {
    loading: false,
    error: false,
    entries: [],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case CHATS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };

        case CHATS_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
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
            if (state.entries.length) {
                return update(state, {
                    entries: {
                        [action.payload]: {
                            fire: {$set: false}
                        }
                    }
                })
            }
            return state;

        default:
            return state;
    }
}