import update from 'react-addons-update';
import {CHATS_LOAD, CHATS_MESSAGE_SEND} from '../actions/chats';
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
                        messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author}]},
                    },
                },
            });

        default:
            return state;
    }
}