import update from 'react-addons-update';
import {
    CHATS_LOAD, 
    CHATS_MESSAGE_SEND, 
    CHATS_ADD, 
    CHATS_FIRE, 
    CHATS_UNFIRE,
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE
} from '../actions/chats';

//import {chats} from '../helpers/chatsData';

const initialState = {
    loading: false,
    entries: [],
    error: false,
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
            /*return {          //ES6
                ...state,
                entries: {
                    ...state.entries,
                    [action.payload.chatId]: {
                        ...state.entries[action.payload.chatId],
                        messages: [
                            ...state.entries[action.payload.chatId].messages,
                            {id: action.payload.id, text: action.payload.text, author: action.payload.author},
                        ]
                    },
                },
            };*/
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{id: action.payload.id, text: action.payload.text, author: action.payload.author}]},
                    },
                },
            });

        case CHATS_ADD:
            return update(state, {
                entries: {
                   $push: [{
                        id: action.payload.id,
                        title: action.payload.title,
                        fire: false,
                        messages: [
                            {
                                id: 0,
                                author: 'Bot',
                                text: `Стартовал чат "${action.payload.title}"`
                            },
                        ],
                    }]
                },
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