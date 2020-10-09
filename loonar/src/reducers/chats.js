import update from 'react-addons-update';
import {CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD, CHATS_FIRE, CHATS_UNFIRE} from '../actions/chats';
import {chats} from '../helpers/chatsData';

const initialState = {
    loading: false,
    entries: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type){
        case CHATS_LOAD:
            return {
                ...state,
                entries: chats,
            };

        case CHATS_MESSAGE_SEND:
            //ES6
            // return {
            //     ...state,
            //     entries: {
            //         ...state.entries,
            //         [action.payload.chatId]: {
            //             ...state.entries[action.payload.chatId],
            //             messages: [
            //                 ...state.entries[action.payload.chatId].messages,
            //                 {id: action.payload.id, text: action.payload.text, author: action.payload.author},
            //             ]
            //         },
            //     },
            // };

            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{id: action.payload.id, 
                            text: action.payload.text, 
                            author: action.payload.author}]},
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