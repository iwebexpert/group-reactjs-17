import update from 'react-addons-update';
import {
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE,
    CHATS_MESSAGE_SEND,
    CHATS_ADD
} from '../actions/chats';
import {chats} from '../helpers/chatsData';

const initialState = {
    loading: false,
    error: false,
    entries: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type){
        // case CHATS_LOAD:
        //     return {
        //         ...state,
        //         entries: chats,
        //     };
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


        default:
            return state;
    }
}