import update from "react-addons-update"
import { nanoid } from "nanoid"
import {
    CHATS_LOAD,
    CHATS_MESSAGE_SEND,
    CHATS_MESSAGE_DELETE,
    CHATS_ADD,
    CHAT_DELETE,
    CHAT_SELECT,
    CHAT_MESSAGES_DELETE,
} from "actions/chats"

import { citates } from "../helpers/citates"
import { chats } from "../helpers/chatsData"

const initialState = {
    loading: false,
    entries: [],
    selected: null,
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: chats,
                selected: null,
                currentChatName: null,
            }

        case CHATS_MESSAGE_SEND:
            const { chatId, message } = action.payload
            const chatSendIndex = state.entries.findIndex(
                (item) => item.id === chatId
            )
            state.entries[chatSendIndex].messages.push(message)
            return {
                ...state,
                entries: [...state.entries],
            }

        case CHATS_MESSAGE_DELETE:
            const chatMessageDeleteIndex = state.entries.findIndex(
                (item) => item.id === action.payload.chatId
            )

            const newMessageArray = state.entries[
                chatMessageDeleteIndex
            ].messages.filter(
                (message) => message.id !== action.payload.messageId
            )
            state.entries[chatMessageDeleteIndex].messages = newMessageArray

            return {
                ...state,
                entries: [...state.entries],
            }

        case CHATS_ADD:
            return update(state, {
                entries: {
                    $merge: {
                        [action.payload.id]: {
                            id: action.payload.id,
                            name: action.payload.name,
                            fire: true,
                            avatar: action.payload.avatar,
                            messages: [
                                {
                                    name: action.payload.name,
                                    text:
                                        citates[
                                            Math.floor(Math.random() * 10) + 1
                                        ].text,
                                    id: nanoid(4),
                                },
                            ],
                        },
                    },
                },
                $merge: {
                    selected: action.payload.id,
                    currentChatName: action.payload.name,
                    chatId: action.payload.id,
                },
            })

        case CHAT_DELETE:
            return {
                ...state,
                entries: state.entries.filter(
                    (item) => item.id !== action.payload
                ),
                selected: null,
            }

        case CHAT_MESSAGES_DELETE:
            return update(state, {
                entries: { [action.payload]: { $merge: { messages: [] } } },
            })

        case CHAT_SELECT:
            const selectChatIndex = state.entries.findIndex(
                (item) => item.id === action.payload
            )

            return {
                ...state,
                selected: action.payload,

                entries: [...state.entries],
                currentChatName: state.entries[selectChatIndex].name,
            }

        default:
            return state
    }
}
