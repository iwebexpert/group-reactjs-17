// export const chats = [
//     {
//         id: 0,
//         title: 'Тестовый чат',
//         messages: [
//             {
//                 id: 0,
//                 author: 'God',
//                 text: 'Let there be light!'
//             },
//         ],
//     },
//     {
//         id: 1,
//         title: 'Рабочий чат',
//         messages: [
//             {
//                 id: 0,
//                 author: 'Galileo',
//                 text: 'Eppur si muove!'
//             },
//         ],
//     },
//     {
//         id: 2,
//         title: 'Друзья',
//         messages: [
//             {
//                 id: 0,
//                 author: 'Che Guevara',
//                 text: 'No pasaran!'
//             },
//             {
//                 id: 1,
//                 author: 'Che Guevara',
//                 text: 'Что нового?'
//             },
//         ],
//     },
// ]
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