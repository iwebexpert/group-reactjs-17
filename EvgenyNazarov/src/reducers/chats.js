import update from 'react-addons-update';
import {
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE,
    CHATS_MESSAGE_SEND,
    CHATS_ADD,
    CHATS_FIRE,
    CHATS_UNFIRE
} from '../actions/chats';

const initialState = {
    loading: false,
    error: false,
    entries: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type){
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
                        messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author}]},
                    },
                },
            });

        case CHATS_ADD:
            const {title, chatId} = action.payload;
            return update(state, {
                entries: {$merge: {
                        [chatId]: {
                            id: chatId,
                            title,
                            messages: [],
                        },
                    }},
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