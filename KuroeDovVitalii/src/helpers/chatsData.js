
import { nanoid } from 'nanoid'
import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()

export const chats = {
    [nanoid(4)]: {
        id: nanoid(4),
        name: 'Сушист',
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "first", id: nanoid(4) }]
    },
    [nanoid(4)]: {
        id: nanoid(4),
        name: 'Визажист',
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "second", id: nanoid(4) }]
    },
    [nanoid(4)]: {
        id: nanoid(4),
        name: 'Массажист',
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "third", id: nanoid(4) }]
    },
    [nanoid(4)]: {
        id: nanoid(4),
        name: 'Хореограф',
        avatar: generator.generateRandomAvatar(),
        messages: [{ name: "me", text: "one more", id: nanoid(4) }]
    }
}