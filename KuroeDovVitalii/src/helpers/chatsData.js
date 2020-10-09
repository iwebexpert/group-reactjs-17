
import { nanoid } from 'nanoid'

export const chats = {
    1: {
        id: nanoid(4),
        name: 'Сушист',
        avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`,
        messages: [{name: "me", text: "first", id: nanoid(4) }]
    },
    2: {
        id: nanoid(4),
        name: 'Визажист',
        avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`,
        messages: [{name: "me", text: "second", id: nanoid(4) }]
    },
    3: {
        id: nanoid(4),
        name: 'Массажист',
        avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`,
        messages: [{name: "me", text: "third", id: nanoid(4) }]
    },
    4: {
        id: nanoid(4),
        name: 'Хореограф',
        avatar: `https://i.pravatar.cc/150?img=${nanoid(4)}`,
        messages: [{name: "me", text: "one more", id: nanoid(4) }]
    }
}