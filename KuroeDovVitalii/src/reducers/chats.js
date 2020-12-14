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
            state.entries[chatSendIndex].fire = message.fire
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
            if (action.payload.error) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    entries: [
                        ...state.entries,
                        {
                            ...action.payload.newChat,
                            fire: true,
                            messages: [
                                {
                                    name: action.payload.newChat.name,
                                    text:
                                        citates[
                                            Math.floor(Math.random() * 10) + 1
                                        ].text,
                                    id: nanoid(4),
                                },
                            ],
                        },
                    ],
                    chatId: action.payload.id,
                }
            }

        case CHAT_DELETE:
            return {
                ...state,
                entries: state.entries.filter(
                    (item) => item.id !== action.payload
                ),
                selected: null,
            }

        case CHAT_MESSAGES_DELETE:
            const newChatMessagesDeleteIndex = state.entries.findIndex(
                (item) => item.id === action.payload
            )
            state.entries[newChatMessagesDeleteIndex].messages = []

            return {
                ...state,
                entries: state.entries,
            }

        case CHAT_SELECT:
            const selectChatIndex = state.entries.findIndex(
                (item) => item.id === action.payload
            )
            state.entries[selectChatIndex].fire = false
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
