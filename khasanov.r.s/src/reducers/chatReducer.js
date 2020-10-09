import update from 'react-addons-update';
import {CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD, CHATS_FIRE, CHATS_UN_FIRE} from '../actions/chatAction';

import {chats} from '../helpers/chatData';

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
                                author: action.payload.author,
                            }],
                        },
                    },
                }
            });
        case CHATS_ADD:
            const {title, chatId} = action.payload;
            return update(state,
                {
                    entries: {
                        $merge: {
                            [chatId]: {
                                id: chatId,
                                title,
                                messages: [],
                            }
                        },
                    },
                });
        case CHATS_FIRE:
            const {fireChatId} = action.payload;
            return update(state,
                {
                    entries: {
                        [fireChatId]: {
                            fire: {$set: true}
                        }
                    },
                });
        case CHATS_UN_FIRE:
            const {unFireChatId} = action.payload;
            return update(state,
                {
                    entries: {
                        [unFireChatId]: {
                            fire: {$set: false}
                        }
                    },
                });
        default:
            return state;
    }
}